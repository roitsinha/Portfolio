import React, { useEffect, useRef, useState } from 'react';
import styles from './QAThread.module.scss';

const CALLSIGN_KEY = 'journal:callsign';
const CALLSIGN_WORDS = ['Observer', 'Voyager', 'Signal', 'Wanderer', 'Relay', 'Drifter', 'Beacon'];

function getOrCreateCallsign() {
  const existing = window.localStorage.getItem(CALLSIGN_KEY);
  if (existing) return existing;
  const word = CALLSIGN_WORDS[Math.floor(Math.random() * CALLSIGN_WORDS.length)];
  const number = Math.floor(100 + Math.random() * 900);
  const callsign = `${word}-${number}`;
  window.localStorage.setItem(CALLSIGN_KEY, callsign);
  return callsign;
}

function loadThread(entryId) {
  try {
    const raw = window.localStorage.getItem(`journal:qa:${entryId}`);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveThread(entryId, questions) {
  window.localStorage.setItem(`journal:qa:${entryId}`, JSON.stringify(questions));
}

// Purely cosmetic-but-earned: turn the entry's flavor distance into a short,
// capped "transmission" delay so asking a question feels like it travels.
function transmitDelayMs(lightYears) {
  const scaled = Math.log10(lightYears + 1e-9 + 1) * 900;
  return Math.min(Math.max(scaled, 350), 1800);
}

export default function QAThread({ entryId, lightYears }) {
  const [callsign] = useState(getOrCreateCallsign);
  const [questions, setQuestions] = useState(() => loadThread(entryId));
  const [draft, setDraft] = useState('');
  const [replyDraft, setReplyDraft] = useState({});
  const [openReplyFor, setOpenReplyFor] = useState(null);
  const [transmitting, setTransmitting] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    setQuestions(loadThread(entryId));
  }, [entryId]);

  const persist = (next) => {
    setQuestions(next);
    saveThread(entryId, next);
  };

  const submitQuestion = (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text || transmitting) return;

    setTransmitting(true);
    const delay = transmitDelayMs(lightYears);
    window.setTimeout(() => {
      if (!mounted.current) return;
      const next = [
        ...questions,
        {
          id: `q-${Date.now()}`,
          author: callsign,
          text,
          timestamp: new Date().toISOString(),
          replies: [],
        },
      ];
      persist(next);
      setDraft('');
      setTransmitting(false);
    }, delay);
  };

  const submitReply = (questionId) => {
    const text = (replyDraft[questionId] || '').trim();
    if (!text) return;
    const next = questions.map(q =>
      q.id === questionId
        ? {
            ...q,
            replies: [
              ...q.replies,
              { id: `r-${Date.now()}`, author: callsign, text, timestamp: new Date().toISOString() },
            ],
          }
        : q
    );
    persist(next);
    setReplyDraft(prev => ({ ...prev, [questionId]: '' }));
    setOpenReplyFor(null);
  };

  return (
    <div className={styles.container}>
      <p className={styles.identity}>
        Transmitting as <span className={styles.callsign}>{callsign}</span> — questions and replies
        live only in this browser.
      </p>

      <form className={styles.askForm} onSubmit={submitQuestion}>
        <input
          className={styles.input}
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Ask a question about this entry..."
          disabled={transmitting}
          maxLength={280}
        />
        <button className={styles.sendBtn} type="submit" disabled={transmitting || !draft.trim()}>
          {transmitting ? 'Transmitting…' : 'Send'}
        </button>
      </form>

      <ul className={styles.questionList}>
        {questions.length === 0 && !transmitting && (
          <li className={styles.empty}>No transmissions yet. Be the first signal.</li>
        )}
        {questions.map((q) => (
          <li key={q.id} className={styles.question}>
            <div className={styles.questionHead}>
              <span className={styles.author}>{q.author}</span>
              <span className={styles.time}>{new Date(q.timestamp).toLocaleString()}</span>
            </div>
            <p className={styles.questionText}>{q.text}</p>

            {q.replies.map((r) => (
              <div key={r.id} className={styles.reply}>
                <div className={styles.questionHead}>
                  <span className={styles.author}>{r.author}</span>
                  <span className={styles.time}>{new Date(r.timestamp).toLocaleString()}</span>
                </div>
                <p className={styles.questionText}>{r.text}</p>
              </div>
            ))}

            {openReplyFor === q.id ? (
              <div className={styles.replyForm}>
                <input
                  className={styles.input}
                  type="text"
                  value={replyDraft[q.id] || ''}
                  onChange={(e) => setReplyDraft(prev => ({ ...prev, [q.id]: e.target.value }))}
                  placeholder="Reply..."
                  maxLength={280}
                  autoFocus
                />
                <button
                  className={styles.sendBtn}
                  type="button"
                  onClick={() => submitReply(q.id)}
                  disabled={!(replyDraft[q.id] || '').trim()}
                >
                  Reply
                </button>
              </div>
            ) : (
              <button className={styles.replyToggle} type="button" onClick={() => setOpenReplyFor(q.id)}>
                Reply
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

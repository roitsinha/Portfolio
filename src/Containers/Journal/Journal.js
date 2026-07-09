import React, { useState } from 'react';
import classes from './Journal.module.scss';
import { journalEntries } from '../../Utils/JournalData';
import QAThread from '../../Components/QAThread/QAThread';

function Journal() {
  const [openId, setOpenId] = useState(journalEntries[0]?.id ?? null);

  const toggle = (id) => setOpenId(prev => (prev === id ? null : id));

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <p className={classes.eyebrow}>field notes</p>
        <h1 className={classes.title}>Journal</h1>
        <p className={classes.subtitle}>
          Short, honest entries connecting what I'm learning as a coder to ideas from physics and
          astronomy — written for whoever else finds the parallels useful. Ask a question on any
          entry; it stays in your browser.
        </p>
      </header>

      <div className={classes.entryList}>
        {journalEntries.map((entry) => {
          const isOpen = openId === entry.id;
          return (
            <article key={entry.id} className={classes.entry}>
              <button
                className={classes.entryHeader}
                onClick={() => toggle(entry.id)}
                aria-expanded={isOpen}
              >
                <div>
                  <span className={classes.tag}>{entry.tag}</span>
                  <h2 className={classes.entryTitle}>{entry.title}</h2>
                  <span className={classes.date}>
                    {new Date(entry.date).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <span className={`${classes.chevron} ${isOpen ? classes.chevronOpen : ''}`}>▾</span>
              </button>

              {isOpen && (
                <div className={classes.entryBody}>
                  {entry.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                  <QAThread entryId={entry.id} lightYears={entry.lightYears} />
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Journal;

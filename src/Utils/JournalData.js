export const journalEntries = [
  {
    id: "escape-velocity",
    title: "What Compiling a Program Taught Me About Escape Velocity",
    date: "2026-04-02",
    tag: "orbital mechanics",
    lightYears: 0.0000000063, // ~ Earth to low orbit, symbolic distance for the shortest thread
    body: [
      "Earth's escape velocity is 11.2 km/s. Below that, no matter how hard you push, you fall back — you just get a slower, more expensive fall. Above it, you leave for good. There's no gentle ramp between 'almost enough thrust' and 'enough thrust'; it's a threshold, not a gradient.",
      "I noticed the same shape in my own work the week I finally got a gnarly build pipeline to pass. For four days I kept nudging things — a flag here, a dependency pin there — and nothing changed, because none of it added up to escape velocity. Then one fix (an actual root cause, not a patch) cleared the threshold and the whole thing just... left orbit. Green build, first try, every time after.",
      "I used to think effort was linear — more hours, more progress. It isn't, not always. Some problems only care whether you cleared the threshold, not how many times you tried to clear it. I've started asking a different question when I'm stuck: not 'have I tried enough things', but 'am I still below escape velocity, doing expensive slow falls, or did I actually change the number that matters.'",
    ],
  },
  {
    id: "mars-latency",
    title: "Latency, Light, and the Loneliness of Talking to Mars",
    date: "2026-05-14",
    tag: "signal delay",
    lightYears: 0.00000023, // ~ Earth-Mars distance in light years (order of magnitude)
    body: [
      "Depending on where Earth and Mars are in their orbits, a radio signal takes somewhere between about 3 and 22 minutes to make the one-way trip. Mission control can't have a conversation with a rover. They send a command, then they wait, genuinely not knowing for minutes whether the wheels turned or the rover is sitting on a rock it can't see over.",
      "I felt an echo of that the first time I shipped a change to a system I couldn't directly observe — a queue consumer running somewhere I had no shell access to, only a dashboard that refreshed every few minutes. I kept hitting refresh like it would make the metrics arrive faster. It wouldn't. The gap between an action and its evidence is just real sometimes, and no amount of impatience closes it.",
      "What actually helped wasn't watching harder. It was designing for the delay — better logs, a health check that told me what happened during the gap, not just after it. Mission control doesn't stare at silence either; they built telemetry so the silence has content in it when it finally arrives. I think that's the actual lesson: you can't beat latency, but you can stop being blind during it.",
    ],
  },
  {
    id: "neutron-star-debugging",
    title: "Debugging in the Dark: What Neutron Stars Taught Me About Silent Failures",
    date: "2026-06-21",
    tag: "indirect evidence",
    lightYears: 4.07, // Crab Pulsar order-of-magnitude flavor (kept modest for the demo)
    body: [
      "Neutron stars are small, dark, and mostly invisible to a regular telescope. We only know most of them exist because of pulsars — the extremely regular radio blips they throw off as they spin, first noticed by Jocelyn Bell Burnell in 1967. Nobody 'saw' a neutron star. Someone noticed a pulse that was too regular to be noise, and had to reason backward to what could possibly produce it.",
      "That's basically every silent-failure bug I've chased. No stack trace, no crash — just a metric that's a little off, or a job that finishes 'successfully' with the wrong output. The system isn't telling you it's broken. You're stuck inferring the shape of the failure from indirect signal, the way you'd infer a collapsed star from a blinking radio pulse and nothing else.",
      "The habit I'm trying to build is treating the boring, regular, unexplained thing as the clue, not the noise. The pulse that's 'probably fine, just some scheduler jitter' is exactly the kind of pattern that turned out to matter in 1967. I don't always get it right. But I've stopped dismissing regularity just because it isn't loud.",
    ],
  },
];

/* Tone and Attitude Words: the words that describe an author's attitude, and practice naming the tone of passages. */
(function () {
  'use strict';
  const words = (data) => data.tone.words.map(([w, d, kind]) => ({ id: 'tone-' + w, w, d, pos: 'adjective', tag: kind[0].toUpperCase() + kind.slice(1), e: '' }));
  const App = {
    about: 'Reading questions often ask about an author\'s tone or attitude, and the answer choices are words like sardonic, measured or ambivalent. This app teaches 30 tone words, sorted into positive, neutral and negative, and gives short passages for naming the tone.',
    how: ['Learn the words in **Tone words**. Notice whether each is positive, neutral or negative.', 'In **Word quiz**, match words and meanings.', 'In **Name the tone**, read a short passage and choose its tone. First decide: positive, negative or neutral?'],
    tabs: [
      SK.cardsTab('cards', 'Tone words', (ctx) => words(ctx.data).map((w) => ({ id: w.id, front: w.w, back: w.d, extra: w.tag, tag: w.tag }))),
      SK.wordQuizTab('quiz', 'Word quiz', (ctx) => words(ctx.data), ['meaning', 'word']),
      SK.bankTab('passages', 'Name the tone', (ctx) => ctx.data.tone.items, { sizes: [4, 8] }),
    ],
    checks: {
      'tone words are labelled and passages are valid': (data, assert) => {
        for (const w of words(data)) assert.ok(['Positive', 'Neutral', 'Negative'].includes(w.tag), w.w);
        for (const it of data.tone.items) assert.deepEqual(SK.validateItem(it), []);
        for (let s = 1; s < 20; s++) for (const it of SK.wordItems(words(data), 10, s, ['meaning', 'word'])) assert.deepEqual(SK.validateItem(it), []);
      },
    },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();

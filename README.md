# Tone and Attitude Words

Learn the words that describe an author's attitude, then name the tone of short passages.

Part of the [GRE and TOEFL Study Suite](https://github.com/Apurba94/gre-toefl-study-suite): 100 free study apps for the GRE General Test and more. It works offline, as a Windows program or in the browser.

## Download and run

- **Windows:** download `Tone and Attitude Words.exe` from the [latest release](https://github.com/Apurba94/gre-tone-words/releases/latest) and open it. Nothing to install. It opens in its own window and saves your progress in your user folder.
- **Browser:** open it online in the suite's web edition at https://gre-toefl-study-suite.vercel.app/apps/gre-tone-words/ . Progress stays in that browser.
- **From source:** `python launcher.py` (Python 3.10 or later, no packages needed).

## What it does

Reading questions often ask about an author's tone or attitude, and the answer choices are words like sardonic, measured or ambivalent. This app teaches 30 tone words, sorted into positive, neutral and negative, and gives short passages for naming the tone.

Sections: Tone words, Word quiz, Name the tone, Progress, About.

## How to use it

1. Learn the words in **Tone words**. Notice whether each is positive, neutral or negative.
2. In **Word quiz**, match words and meanings.
3. In **Name the tone**, read a short passage and choose its tone. First decide: positive, negative or neutral?

## Good to know

- All questions, passages and definitions were written for this suite. None are official ETS questions. For official practice, use the materials on ets.org.
- It follows the GRE General Test as shortened in September 2023 and the TOEFL iBT as updated in January 2026. Formats change, so check ets.org before your test.
- Feedback on writing and speaking counts things a program can count honestly, such as length and linking words. It does not give an official score.
- Not endorsed by or affiliated with ETS. GRE and TOEFL are registered trademarks of ETS.

## For developers

The app is plain HTML and JavaScript in `web/`, run by a small Python launcher that serves it on 127.0.0.1 only and needs a secret token for saving. Tests: `node --test "tests/*.test.js"` (23 tests) and `python -m unittest discover -s tests`. Build the .exe with `python build_exe.py`.

Built with AI assistance (Claude Code). MIT licence. By JANIN A APURBA.

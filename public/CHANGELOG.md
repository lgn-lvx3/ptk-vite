#### 0.2.1 (2023-10-13)

##### Build System / Dependencies

* **deploy:**  re adding removed action file (80b625ad)

##### Documentation Changes

* **readme:**  Updated readme to reflect used frameworks (6da1f749)

##### New Features

* **test:**
  *  updated FIQL to test for setting max score (835a8fa0)
  *  Added test helpers and UDI6 unit tests (4f712724)
* **surveys:**
  *  added scale scoring to all surveys, added types, impl of UDI6 and FIQL scale scores via testing. (9309147e)
  *  all surveys built w/ working UI (ca8f4c05)
  *  impl of PFDI, PFIQ, UDI6, IIQ, CRAD, POPDI (0ce35ca5)
* **survey:**
  *  impl of scale scores for base survey, UDI6 and FIQL tested. (50d59ef0)
  *  Updated UDI6 calc to make sense and updated testing (6a8f2b7a)
  *  Added CCFIS and VFI surveys (cb3efbe3)
* **ui:**
  *  added full layout of themes (383d19dd)
  *  added theme switcher component (c0b30264)
  *  added PH footer (453a135f)
  *  added home/surveys pages, added logo to pdf (8d30ac03)
  *  integration with react-router-dom (2e5f1036)
  *  added error handling / snackbar to share (708f5592)
  *  working udi6 calc (92d02493)
* **i18n:**  impl of translations for UDI6 to en/es. refactor(survey): Refactor of BaseSurvey & PDFSurvey to reflect multi questionlist surveys. (880ce34a)
* **pdf:**
  *  impl of pdf download/share (cd15ae39)
  *  valid pdf rendering of survey (8b7f91d6)

##### Bug Fixes

* **data:**  updated POPDI change from vagina to genitals (e8d97eeb)
* **footer:**  impl of responsive ui (a1fdef86)
* **nav:**  added staticwebapp config for URL routing fallback (cda0f94f)
* **ui:**
  *  Updated site title (ac79f6df)
  *  fixed broken logo images (216f7f17)
  *  optimized routing, removing unecessary pages. Added useEffects to handle translation changes on the fly. (4be6c6d7)
  *  language dropdown fix (07188f2f)
  *  updated header to allow a lot of surveys (454c64bb)
  *  removed icons on small screens (c8450512)
  *  added app.css (a4dd6169)

##### Other Changes

* **ui:**  added spanish translations of survey content (0bab1c7a)
* //github.com/lgn-lvx3/ptk-vite (8368fefe)
*  @Azure opensource@microsoft.com (bbff0212)

#### 1.0.4 (2022-04-13)

#### 1.0.3 (2022-04-13)

##### Chores

* **lint:**  linted some files ([7046d7d7](https://github.com/lgn-lvx3/wbhpt-pkt/commit/7046d7d7dfb70ff66a0dab9ed2d07ec49e8eb261))
* **script:**  updated build script ([7cfcc3ee](https://github.com/lgn-lvx3/wbhpt-pkt/commit/7cfcc3ee77ea2d4146f45c24fba669303b898160))
* **build:**  fixed tsconfig to skip lib check ([36b0d1c2](https://github.com/lgn-lvx3/wbhpt-pkt/commit/36b0d1c2bb42b60c102aabdb94da6d5a2e8e25e0))
* **merge:**
  *  merged in calc-data, fixed merge conflicts and ran export build ([296fed9b](https://github.com/lgn-lvx3/wbhpt-pkt/commit/296fed9b02ef788761e2cc62eaa0b1f95a35b727))
  *  merged in tailwind update, added eslint and updated weird ass prop type errors ([a40677ae](https://github.com/lgn-lvx3/wbhpt-pkt/commit/a40677ae890dca31f72cb903381a77902e41fd2b))
  *  merged in tailwind update ([b15addf2](https://github.com/lgn-lvx3/wbhpt-pkt/commit/b15addf28bc53ff2e9616369ef2093f20d10ed87))
* **redux:**  add redux to project ([1b8ad07a](https://github.com/lgn-lvx3/wbhpt-pkt/commit/1b8ad07acbe4df7ff2454dfb30eff33c286a261d))
* **tailwind-update:**  updated tailwind to latest and fixed warnings ([ea235ed6](https://github.com/lgn-lvx3/wbhpt-pkt/commit/ea235ed6a5fb477274e26d5bfcce5596f5b621fe))
* **yarn:**  removed yarn.lock ([5037710c](https://github.com/lgn-lvx3/wbhpt-pkt/commit/5037710c1411408de038c0b83406f008a3dbb15a))
* **stash:**  update to add image ([3722dbf6](https://github.com/lgn-lvx3/wbhpt-pkt/commit/3722dbf64e734e09a63fbfadaeb26548647dd683))

#### 1.0.2 (2022-03-09)

##### Bug Fixes

* **ui:**
  *  updated score page ([0b42be13](https://github.com/lgn-lvx3/wbhpt-pkt/commit/0b42be133cc131e4031b7f8034a129c454e75583))
  *  working through adding UI skeleton, and other component design ([7ebf2ca3](https://github.com/lgn-lvx3/wbhpt-pkt/commit/7ebf2ca351a0e77744e9f3fee9d5ac5cf7f20635))
  *  adding backgrounds etc and updating styles. ([94984743](https://github.com/lgn-lvx3/wbhpt-pkt/commit/94984743b81cdcc3b96a417fdf2a36429dd95d3b))

#### 1.0.1 (2022-01-07)

##### Build System / Dependencies

* **web:**  changed values over for wbhpt-pkt ([66a5f997](https://github.com/lgn-lvx3/wbhpt-pkt/commit/66a5f99759832cbf8b55ce350965340e750aa8b0))

##### Other Changes

*  @Azure opensource@microsoft.com ([7bc25070](https://github.com/lgn-lvx3/wbhpt-pkt/commit/7bc25070a6bac8450e1819bfd0fb509956311b35))
* //github.com/hzyIO/lvx3 ([7eaf5433](https://github.com/lgn-lvx3/wbhpt-pkt/commit/7eaf543385f0d7b3cc17242abf8280435a308ed1))
*  @Azure opensource@microsoft.com ([87b5a4d7](https://github.com/lgn-lvx3/wbhpt-pkt/commit/87b5a4d7d974812038f481fee808b7d753e73564))

##### Refactors

* **everything:**  converted to az static web app, added email sending, fixed this and that ([f2bcae52](https://github.com/lgn-lvx3/wbhpt-pkt/commit/f2bcae525718573c5ec371e0841004f2865eacc3))


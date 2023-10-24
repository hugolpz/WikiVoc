**WikiVoc.js** is a toolbox to assist the creation of illustrated language learning flashcard. Centered on English language as its corner stone, we built dedicated modules to handle the word-prompt dictionary, generate images, vectorize images, and pivot to non-English languages.

## Modules
- `words.js`: dictionary of English word and illustration description pairs, such as
  - `{ "otter": "a cute smiling otter flowting on the watter with an orange ball in her tiny pawn" }`
- `generate.js`: images generation
- `vectorize.js`: images vectorisation
- `pivot/fr.js`: alternative languages pointing to the English word-illustration, such as
  - `{ word: "loutre", illustration: "otter" }`.

## APIs
The core work is mostly on dictionary and prompt creation. We then rely on **paid APIs** for state of of the art generations and vectorization. At the moment, we use :
- [Dall-e 3/api](https://platform.openai.com/docs/api-reference/images)
- [Vectorizer.ai/api](https://vectorizer.ai/api)

Alternative solutions exist which are open, cheaper, but also lower quality solutions. At the moment, we therefore decided to go for those paid APIs.


## Todo
- [ ] Externalize API keys
- [ ] Create a github repository
- [ ] Create a proper git ignore
- [ ] Migrate words out of `generate.js`

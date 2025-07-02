```diff
! DISCLAIMER: PROJECT NEEDS DEVELOPMENT.
```

**WikiVoc.js** is a toolbox to assist the creation of illustrated language learning flashcard. Centered on English language as its corner stone, we built dedicated modules to handle the word-prompt dictionary, generate images, vectorize images, and pivot to non-English languages.

## Modules
- `words.js`: dictionary of English word and illustration description pairs, such as
  - `{ "otter": "a cute smiling otter flowting on the watter with an orange ball in her tiny pawn" }`
- `generate.js`: images generation
- `vectorize.js`: images vectorisation
- `pivot/fr.js`: alternative languages pointing to the English word-illustration, such as
  - `{ word: "loutre", illustration: "otter" }`.

## Flashcards demo
Each of these flashcards have been generated from prompts, then hand selected from 4~12 candidates images.
| | | | |
|----|----|----|----|
| <img src='doc/WikiVoc—arm.jpg' style='width:120px;'/><br><center>arm</center> | <img src='doc/WikiVoc—bag.jpg' style='width:120px;'/><br><center>bag</center> | <img src='doc/WikiVoc—ball.jpg' style='width:120px;'/><br><center>ball</center> | <img src='doc/WikiVoc—basket.jpg' style='width:120px;'/><br><center>basket</center> 
| <img src='doc/WikiVoc—bath.jpg' style='width:120px;'/><br><center>bath</center> | <img src='doc/WikiVoc—berry.jpg' style='width:120px;'/><br><center>berry</center>  | <img src='doc/WikiVoc—bed.jpg' style='width:120px;'/><br><center>bed</center> | <img src='doc/WikiVoc—bird.jpg' style='width:120px;'/><br><center>bird</center>
| <img src='doc/WikiVoc—bone.jpg' style='width:120px;'/><br><center>bone</center> | <img src='doc/WikiVoc—box.jpg' style='width:120px;'/><br><center>box</center> | <img src='doc/WikiVoc—boots.jpg' style='width:120px;'/><br><center>boots</center> | <img src='doc/WikiVoc—bottle.jpg' style='width:120px;'/><br><center>bottle</center> 
| <img src='doc/WikiVoc—boy.jpg' style='width:120px;'/><br><center>boy</center> | <img src='doc/WikiVoc—bucket.jpg' style='width:120px;'/><br><center>bucket</center> | <img src='doc/WikiVoc—handbag.jpg' style='width:120px;'/><br><center>handbag</center> | <img src='doc/WikiVoc—ribbon.jpg' style='width:120px;'/><br><center>ribbon</center> 
| <img src='doc/WikiVoc—otter.jpg' style='width:120px;'/><br><center>otter</center> | <img src='doc/WikiVoc—schoolgirls.jpg' style='width:120px;'/><br><center>schoolgirls</center> | <img src='doc/WikiVoc—squeleton.jpg' style='width:120px;'/><br><center>squeleton</center> | <img src='doc/WikiVoc—tree.jpg' style='width:120px;'/><br><center>tree</center> 
| <img src='doc/WikiVoc—toilet.jpg' style='width:120px;'/><br><center>toilet</center>

## Prompt
Our typical prompt template reads :
```
Object: one cute otter floating on its back in water with an orange in its pawn.
Style: super deformed manga, flat design. Background: pure white background. View: wide shot, isometric.
```

## Words and descriptions
> _See [words.js](./words.js)_
 
_TBC._

## Web user interface
You can generate images by hand, with no developement skills.
1. Open [Bing.com/images/create/](https://www.bing.com/images/create/object3a-one-cute-otter-floating-on-its-back-in-wat/653787e871844f44b86cd1496706bc62?FORM=GENCRE) > create an account.
2. Enter prompt :<br>`Object: one cute otter floating on its back in water with an orange in its pawn. Style: super deformed manga, flat design. Background: pure white background. View: wide shot, isometric. ` > click "Create"
3. Click on prefered image, save locally as `WikiVoc—otter.jpg`
4. Change prompt's object statement as needed.

| Bing Image Generator with standardized prompt | Bing Image Results (4) | Selected "otter" illustration |
|----|----|----|
| <img src='doc/BingQuery1.png' style='width:300px;'/><br><center></center> | <img src='doc/BingQuery2.png' style='width:300px;'/><br><center></center> | <img src='doc/WikiVoc—otter.jpg' style='width:300px;'/><br><center></center>

## APIs
The core work is mostly on dictionary and prompt creation. We then rely on **paid APIs** to scale up work and state of the art image generations and vectorization. At the moment, we use :
- [Dall-e 3/api](https://platform.openai.com/docs/api-reference/images)
- [Vectorizer.ai/api](https://vectorizer.ai/api)

Alternative solutions exist which are open, cheaper, but also lower quality solutions. At the moment, we therefore decided to go for those paid APIs.

### OpenAI API
> _See [generate.js](./generate.js)_

On non monthly-suscribing accounts, you can still fund a budget for paid API requests :
1. Open [OpenAI billing page](https://platform.openai.com/account/billing/overview) : add 5$ to your account.
2. Open [OpenAI API keys](https://platform.openai.com/account/api-keys) : generate a key. 
3. Copy Secret key, then `echo 'OPENAI_API_KEY="paste your API key here"' > .env`, so the .env has your API key.

```diff
! DISCLAIMER: API Key will be valid about 2 hours.
! API-generated image URL are valid for 1 hour. 
! As of 2023/10, [OpenAI pricing](https://openai.com/pricing) was about $0,02/image on Dall-2.
```

### Vectorizer.ia API
> _See [vectorize.js](./vectorize.js)_

## See also
- [Wikimedia Commons:WikiVoc](https://commons.wikimedia.org/wiki/Commons:WikiVoc) — larger project on Wikimedia
- [Commons:Pattypan](https://commons.wikimedia.org/wiki/Commons:Pattypan) — Wikimedia mass images upload tool.

## Todo
- [x] Readme.md
- [x] Create a github repository
- [x] Create a proper git ignore
- [x] Externalize API keys
- [x] Migrate words out of `generate.js`

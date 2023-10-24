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
| <img src='doc/WikiVoc—boy.jpg' style='width:120px;'/><br><center>boy</center> | <img src='doc/WikiVoc—bucket.jpg' style='width:120px;'/><br><center>bucket</center> | <img src='doc/WikiVoc—handbag.jpg' style='width:120px;'/><br><center>handbag</center> | <img src='doc/WikiVoc—basket.jpg' style='width:120px;'/><br><center>basket</center> 
| <img src='doc/WikiVoc—ribbon.jpg' style='width:120px;'/><br><center>ribbon</center> | <img src='doc/WikiVoc—schoolgirls.jpg' style='width:120px;'/><br><center>schoolgirls</center> | <img src='doc/WikiVoc—squeleton.jpg' style='width:120px;'/><br><center>squeleton</center> | <img src='doc/WikiVoc—tree.jpg' style='width:120px;'/><br><center>tree</center> | <img src='doc/WikiVoc—toilet.jpg' style='width:120px;'/><br><center>toilet</center>

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

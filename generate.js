// Coding:
// https://www.npmjs.com/package/openai
// https://platform.openai.com/docs/api-reference/images
// https://platform.openai.com/docs/guides/images
// Settings:
// https://platform.openai.com/account/api-keys
// https://platform.openai.com/account/billing/
// https://platform.openai.com/account/rate-limits


/* ***************************************************** */
/* SETTINGS ******************************************** */
//var OpenAI = require("openai")
import OpenAI from "openai";
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';

console.log(process.env.OPENAI_API_KEY) // remove this after you've confirmed it is working


const openai = new OpenAI({
  // https://platform.openai.com/account/api-keys
  apiKey: process.env.OPENAI_API_KEY,
});

/* ***************************************************** */
/* TOOLBOX ********************************************* */
// Image save to director
var downloadImage = function(imageUrl, targetDirectory, filename) {
  // Ensure the target directory exists
  if (!fs.existsSync(targetDirectory)) {
    fs.mkdirSync(targetDirectory, { recursive: true });
  }
  // Download and save the image
  fetch(imageUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.buffer();
    })
    .then((imageBuffer) => {
      fs.writeFileSync(targetDirectory+filename, imageBuffer);
      console.log('Image downloaded and saved to', targetDirectory+filename);
    })
    .catch((error) => {
      console.error('Error downloading and saving the image:', error);
    });
};

var downloadImagesByUrls = function(urlsArr,targetDirectory,word) {
  for (var i =0; i<urlsArr.length; i++){
    var imageUrl = urlsArr[i],
        filename = `WikiVoc—${word}—${i}.png`;
    console.log(filename,imageUrl);
    downloadImage(imageUrl, targetDirectory,filename);
  };
};

/* ***************************************************** */
/* API TOOLS ***************************************** */
async function imageGenerate(word,prompt) {
  prompt = prompt || "A gleeful super-duper sunflower hedgehog dancing among flowers in a lush garden, with happy humming bees.";
  const image = await openai.images.generate({
    prompt: prompt,
    n: 1,
    size: "256x256"
  });
  var urlsArr = image.data.map(item => item.url);
  console.log(urlsArr);
  const targetDirectory = '../imgByAPI/';
  downloadImagesByUrls(urlsArr, targetDirectory,word);
  return urlsArr;
};

/* ***************************************************** */
/* WORDS ********************************************* */
/* Words 2 descriptions ******************************** */
var objectsDescriptions = {
  "wasp":    { description: "One wasp eating a berry" },
  "soldier": { description: "One cute soldier" },
  "glass":   { description: "One blue glass of water with ice" },
};

/* ***************************************************** */
/* PROMPTS ********************************************* */
/* Prompts bricks ************************************** */
var bricks = {
  style: {
    SD: "super deformed manga",
    manga: "simplified colored manga",
    photo: "photorealistic",
    naturalist: "antique botanical illustration drawn with fine lines and a touch of watercolour whimsy",
    flat: "flat design illustration",
    paper: "paper craft illustration",
    ink: "ink style illustration",
    minimap: "A minimap diaporama",
    poster: "bold and vivid style of vintage travel poster illustration",
    pixelart: "pixelart",
    "3D": "3D render",
  },
  border: {
    fine: "drawn with fine lines",
    strong: "drawn with one surrounding black line",
    sticker: "as sticker with white boder",
  },
  view: {
    isometric: "isometric",
    wide: "wide view, long shot, zoomed out",
    macro: "Close-up macro photograph",
  },
  background: {
    white: "pure white",
    black: "pure black",
    green: "outdoor greenish",
  },
  atmosphere: {
    dramatic: "room is dimly lit, adding to the dramatic atmosphere",
  }
};

// Image generation prompt ***************************** */
var prompt = function(objectDescription, style, view, background, border) {
  var object = objectDescription || "one wasp eating a berry",
    style = style || bricks.style["SD"],
    view = view || bricks.view["wide"],
    background = background || bricks.background["white"],
    border = border || "";
  return `Object : ${object}. Style: ${style}. View: ${view}. Background : ${background}. ${border.length>0?"Border: "+ border:""}`;
}

var wordsToPrompts = function(wordsArr) {
  var promptsArr = [];
  for(var i=0;i<wordsArr.length;i++){
    promptsArr[i] = prompt(objectsDescriptions[wordsArr[i]].description);
  }
  return promptsArr;
}

/* ***************************************************** */
/* REQUEST ***************************************** */
var wordsArr = ["wasp"];// "soldier", "glass"];
var promptsArr = wordsToPrompts(wordsArr);
console.log(promptsArr)
for(var i=0;i<promptsArr.length;i++){
  console.log(promptsArr[i])
  var imagesUrlArr = imageGenerate(wordsArr[i],promptsArr[i]);
};

// USAGE
// import fetch from 'node-fetch';
// import words from './wordsFromWiki.cjs';
// console.log('4:', await words);

async function fetchWikipediaPage(pageTitle) {
    
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitle)}&prop=extracts&exintro&explaintext&redirects&converttitles&format=json`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch Wikipedia page: ${response.statusText}`);
    }

    const data = await response.json();

    // Extract the raw text from the response (you may need to parse it further)
    const pages = data.query.pages;
    const firstPageId = Object.keys(pages)[0];
    const rawText = pages[firstPageId].extract;
    return rawText;
  } catch (error) { 
    console.error(error);
    return null;
  }
}
var wikiToJson = function(rawText){
  var onlyData = rawText.replace(/\/\/.+\n/gi,''); // remove comments lines
  var onlyValid = onlyData.replace(/^(?!.*:.*).+$\n/gm,''); // remove empty descriptions lines
  var curvyBrackets = onlyValid.replace(/^(.+?)\s*:\s*(.+?)\s*$/gm,'{ "$1":"$2" },'); // convert into json
  var final = curvyBrackets.replace(/\n/gm,'').replace(/,$/,'') // remove line jumps and last comma
  return JSON.parse(`[`+final+`]`);
}
// Replace 'Albert_Einstein' with the title of the Wikipedia page you want to fetch
const pageTitle = 'Commons:WikiVoc/Picturable';
var arr = fetchWikipediaPage(pageTitle)
  .then((rawText) => { return wikiToJson(rawText); })
  .catch((error) => console.error(error));

module.exports= arr;
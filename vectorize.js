// https://vectorizer.ai/api
// Requires "request" to be installed (see https://www.npmjs.com/package/request)
import request from 'request';
import fs  from 'fs';
import path from 'path';
const rootDirectory = './';


/* ***************************************************** */
/* LEXICOGRAPHIC TOOLS ********************************* */
// List words from existing images
var listWords = function(filesList, prefix){
    var wordsList = filesList.map((item) => { return item.replace("WikiVoc—",'').replace(/(\d+)/,'').split(/(\.)/)[0]; } );
    console.log("wordsList: ",wordsList);
    return wordsList;
}

/* ***************************************************** */
/* GRAPHIC TOOLS *************************************** */
// Vectorize via https://vectorizer.ai
var vectorize = function (filename) {
    request.post({
      url: 'https://vectorizer.ai/api/v1/vectorize',
      formData: {
        image: fs.createReadStream(filename), // TODO: Replace with your image
        mode: "test"
      },
      auth: {user: 'vklas5hv42ccs9b', pass: 'pd3gnvma4mgiql9t6rguqp4iqdjhvnqo915n8f9s9lh5q2psn16d'},
      followAllRedirects: true,
      encoding: null
    }, function(error, response, body) {
      if (error) {
        console.error('Request failed:', error);
      } else if (!response || response.statusCode != 200) {
        console.error('Error:', response && response.statusCode, body.toString('utf8'));
      } else {
        // Save result
        fs.writeFileSync("./svg/"+filename+".svg", body);
      }
    });
}

/* ***************************************************** */
/* RUN ************************************************* */
// Lists files and filter
var listFiles = function(dir,filter) {
    var dir = dir || rootDirectory;
    var filter = filter || '.jpg';
    var filesList = [];
    try {
      const files = fs.readdirSync(dir);
     // console.log("files", files);
      filesList = files.filter((file) => file.includes(filter));
      console.log('filesList:', filesList);
    } catch (err) { 
      console.error('Error reading directory:', err);
    }
    return filesList;
}

var imagesList = listFiles("./",'.jpg');
var wordsList = listWords(imagesList,"WikiVoc—");

for (var i=0;i<5;i++){
    var currFile = imagesList[i];
    console.log(`File`+i,currFile)
    vectorize("./"+currFile);
}

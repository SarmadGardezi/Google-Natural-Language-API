// Written by Sarmad Gardezi
// URL: sarmadgardezi.com
function analyzeText() {
  
  var text = "The quick brown fox jumped over the lazy dog";
  
  var requestUrl = [
    'https://language.googleapis.com/v1/documents:analyzeSentiment?key=',
    "THIS_IS_THE_API_KEY"
  ].join("");
  
  // Use documents:analyzeEntities API endpoint for analyzing entities
  // Use documents:analyzeSyntax API endpoint for synctactic (linguistic) analysis
  
  var data = {
    "document": {
      "language": "en-us",
      "type": "PLAIN_TEXT",
      "content": text
    },
    "encodingType": "UTF8"
  };
  
  var options = {
    method : "POST",
    contentType: "application/json",
    payload : JSON.stringify(data)
  };
  
  var response = UrlFetchApp.fetch(requestUrl, options);
  
  var data = JSON.parse(response);
  
  Logger.log(data);
  
}
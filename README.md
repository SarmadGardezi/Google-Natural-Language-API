# How to Use the Google Natural Language API with Apps Script

Google Natural Language API helps you make sense of unstructured data. You can pass a string, like a tweet or transcribed speech, to the Natual Language API and it will detect the entities (like person, places, products, events), the sentiment (whether customers are happy or mad at your brand), and the syntax (parts of speech).

The Cloud Natural Language API can analyze sentences in multiple languages and it has a REST API so you can easily use it with your Google Apps Script projects. For instance, the Twitter Archiver add-on saves tweets in a Google Sheet. NLP API can be used to understand the emotion or sentiments in a tweet to determine the satisfaction level of customers on social media.

To get started, go to script.google.com and create a new project. Then go to Resources – Cloud Platform Project to open Google Developers Console. Here go to the API section and enable the Natular Language API under Google Cloud Machine Learning. Next click on Credentials to create an API key for your Google Script.

##Things to know:
1. If you don’t specify document.language, then the language will be automatically detected.
2. You can upload the text file to Google Cloud Storage and specify the URI without the need to send the contents of the file in the body of your request.
3. Google Cloud Natural Language API requires billing to be enabled.

# Author
Written by [SarmadGardezi](http://sarmadgardezi.com) for [Developers](http://thedevelopers.pk). Follow me on [@twitter](https://twitter.com/@SarmadGardezi) & [Facebook](https://facebook.com/SarmadGardezi)

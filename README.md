# Project Goal

This project is a sample project to understand and implement the basics of webpack build tools. The functionality of this application is to generate a sample response from one of the APIs supplying NLP sentiment analysis. On entering the first name of the user, the user's name is validated and after validation the sample data is received from the API call and rendered onto the screen.

The goal of this project is to practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

# Certain Points and Explanations

NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.


## The Meaning Cloud API

The Meaning Cloud API is an API available online which will generate sample sentiment analysis results after registering for an valid key in the API.
The link to Meaning Cloud API tools is https://www.meaningcloud.com/developer/sentiment-analysis/dev-tools.

## Steps to run the app.

- Step 1 > Enter your first name
- Step 2 > If your name is present in the valid names list you are allowed
- Step 3 > On getting allowed the sentiment analysis results will come up

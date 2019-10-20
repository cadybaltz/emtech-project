import requests
from bs4 import BeautifulSoup

# from app import app

import speech_recognition as sr
from playsound import playsound
from gtts import gTTS

import argparse

from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types

import random

import time

import os



all_tweets = []
url = ['https://twitter.com/cnni']





def scanner():
    counter = 1
    total = 0
    results= []
    for i in url:
        data = requests.get(i)
        html = BeautifulSoup(data.text, 'html.parser')
        timeline = html.select('#timeline li.stream-item')
        for tweet in timeline:
            tweet_id = tweet['data-item-id']
            tweet_text = tweet.select('p.tweet-text')[0].get_text()
            all_tweets.append({"id": tweet_id, "text": tweet_text})
            if "market" in tweet_text or "economy" in tweet_text or "deal" in tweet_text:
                print(tweet_text)
            content = tweet_text
            client = language.LanguageServiceClient()
            document = types.Document(
                content=content,
                type=enums.Document.Type.PLAIN_TEXT)
            annotations = client.analyze_sentiment(document=document)
            magnitude = annotations.document_sentiment.magnitude
            print("On a scale of -1 to 1, the sentiment score of the spoken text is " + str(magnitude))
            if magnitude != 0:
                counter +=1
                total +=magnitude
        results.append(total/counter)
        
    filename = """<head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />
    
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="%PUBLIC_URL%/apple-icon.png"
    />
    

    <!--     Fonts and icons     -->
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
    />

    <title>""" + str(results[0]) + """</title>
  </head>
  <body>
    <noscript> You need to enable JavaScript to run this app. </noscript>
    <div id="root"></div>
    <!--
            This HTML file is a template.
            If you open it directly in the browser, you will see an empty page.

            You can add webfonts, meta tags, or analytics to this file.
            The build step will place the bundled scripts into the <body> tag.

            To begin the development, run `npm start` or `yarn start`.
            To create a production bundle, use `npm run build` or `yarn build`.
        -->
  </body>"""

    f=open("index.html", "w+")
    f.write(filename)
    f.close()
    os.system('npm start')

scanner()

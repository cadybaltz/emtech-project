import requests
from bs4 import BeautifulSoup

import speech_recognition as sr
from playsound import playsound
from gtts import gTTS

import argparse

from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types

import random

import time


all_tweets = []
url = ['https://twitter.com/cnni', "https://twitter.com/TheEconomist", "https://twitter.com/guardiannews", "https://twitter.com/washingtonposts"]
old = []
counter = 0
total = 0
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
        print(total/counter)

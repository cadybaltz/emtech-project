import requests
from bs4 import BeautifulSoup

# from app import app

import speech_recognition as sr
from playsound import playsound
from gtts import gTTS

import argparse
import datetime

from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types

import random
import time
import os

all_tweets = []
url = ['https://twitter.com/realdonaldtrump','https://twitter.com/guardiannews','https://twitter.com/theeconomist','https://twitter.com/washingtonpost','https://twitter.com/thestalwart','https://twitter.com/vitalikbuterin','https://twitter.com/cnnbrk','https://twitter.com/nytimes']


now = datetime.datetime.now()


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
    avgTot= 0
    for i in results:
        avgTot +=i
    avgTot/=len(results)
    if avgTot < .30:
        status = "News analysis points towards a market fall"
        banner = "red"
        #"sell"
    if avgTot > .30 and i < .55:
        status = "News analysis is neutral at this time"
        banner = "yellow"
        #hold
    if avgTot > .55:
        status = "News analysis predicts the marketing going up"
        banner = "green"
    avgTot = avgTot * 100
    timefound = now.strftime("%Y-%m-%d %H:%M")
    dashboard = """/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";



class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">""" + status + """</CardTitle>
                  <p className="card-category">The current calculated sentiment analysis value is: </p>""" + str(avgTot) + """
                </CardHeader>
                
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated """ + timefound + """
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
          <Col md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                <iframe src="https://us.etrade.com/e/t/user/login"
                frameBorder="0"
                height="425"
                width = "100%"></iframe>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" sm = "6">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Sentiment Analysis Rating</CardTitle>
                  <p className="card-category">On a Scale from 0 to 100</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardNASDAQChart.data}
                    options={dashboardNASDAQChart.options}
                    width={400}
                    height={200}
                  />
                </CardBody>
                <CardFooter>
                  <div className="chart-legend">
                  </div>
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;"""

    charts = """/*!
=========================================================
* Paper Dashboard React - v1.1.0
=========================================================
* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
const dashboard24HoursPerformanceChart = {
  data: canvas => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct"
      ],
      datasets: [
        {
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
        },
        {
          borderColor: "#f17e5d",
          backgroundColor: "#f17e5d",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
        }
      ]
    };
  },
  options: {
    legend: {
      display: false
    },

    tooltips: {
      enabled: false
    },

    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            beginAtZero: false,
            maxTicksLimit: 5
            //padding: 20
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "#ccc",
            color: "rgba(255,255,255,0.05)"
          }
        }
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
            display: false
          },
          ticks: {
            padding: 0.1,
            fontColor: "#9f9f9f"
          }
        }
      ]
    }
  }
};

const dashboardEmailStatisticsChart = {
  data: canvas => {
    return {
      labels: [1, 2, 3],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157"],
          borderWidth: 0,
          data: [342, 480, 530, 120]
        }
      ]
    };
  },
  options: {
    legend: {
      display: false
    },

    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2
    },

    tooltips: {
      enabled: false
    },

    scales: {
      yAxes: [
        {
          ticks: {
            display: false
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)"
          }
        }
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            display: false
          }
        }
      ]
    }
  }
};

const dashboardNASDAQChart = {
  data: {
    labels: [
      "@realdonaldtrump",
      "@guardiannews",
      "@TheEconomist",
      "@washingtonpost",
      "@TheStalwart",
      "@VitalikButerin",
      "@cnnbrk",
      "@nytimes"
    ],
    datasets: [
      {
        data: [""" + str(results[0]) + """,""" + str(results[1]) + """,""" + str(results[2]) + """,""" + str(results[3]) + """,""" + str(results[4]) + """,""" + str(results[5]) + ""","""+ str(results[6]) + """,""" + str(results[7]) + """],
        fill: false,
        borderColor: "#51CACF",
        backgroundColor: "transparent",
        pointBorderColor: "#51CACF",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      },
    ]
  },
  options: {
    legend: {
      display: false,
      position: "top"
    }
  }
};

module.exports = {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
};""" 

    f=open(r"""C:\Users\CB\Desktop\hack\emtech-project\src\views\Dashboard.jsx""", "w+")
    f.write(dashboard)
    f.close()
    e=open(r"""C:\Users\CB\Desktop\hack\emtech-project\src\variables\charts.jsx""", "w+")
    e.write(charts)
    e.close()
    os.system('npm start')

scanner()
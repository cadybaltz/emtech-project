/*!

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

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


class Map extends React.Component {
  render() {
    return (
      <>
        <div className="content">
        
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                     <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="realdonaldtrump"
                        options={{height: 500}}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                     <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="guardiannews"
                        options={{height: 500}}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                     <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="theeconomist"
                        options={{height: 500}}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                     <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="washingtonpost"
                        options={{height: 500}}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                     <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="thestalwart"
                        options={{height: 500}}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                     <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="vitalikbuterin"
                        options={{height: 500}}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                     <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="cnnbrk"
                        options={{height: 500}}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                     <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="nytimes"
                        options={{height: 500}}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            
          </Row>
        </div>
      </>
    );
  }
}

export default Map;

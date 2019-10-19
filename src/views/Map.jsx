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
            <Col md="12">
              <Card>
                <CardHeader>News</CardHeader>
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                     <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="potus"
                        options={{height: 400}}
                    />
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>News</CardHeader>
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                     <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="cnni"
                        options={{height: 400}}
                    />
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>News</CardHeader>
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                     <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="TheEconomist"
                        options={{height: 400}}
                    />
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>News</CardHeader>
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                     <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="guardiannews"
                        options={{height: 400}}
                    />
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>News</CardHeader>
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                     <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="washingtonposts"
                        options={{height: 400}}
                    />
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>News</CardHeader>
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                     <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="TheStalwart"
                        options={{height: 400}}
                    />
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>News</CardHeader>
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                     <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="VitalikButerin"
                        options={{height: 400}}
                    />
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>News</CardHeader>
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                     <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="cnnbrk"
                        options={{height: 400}}
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

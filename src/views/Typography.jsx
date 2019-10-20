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

class Typography extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <h5 className="title">About Us</h5>
                                    <p className="category">
                                        Created using Montserrat Font Family
                  </p>
                                </CardHeader>
                                <CardBody>
                                    <div className="typography-line">
                                        <h5>
                                            <span>Header 5</span>
                                            A New Way to Trade
                    </h5>
                                    </div>
                                    <div className="typography-line">
                                        <h6>
                                            <span>Header 6</span>
                                            A new perspective on profitting in stock market trading
                    </h6>
                                    </div>
                                    <div className="typography-line">
                                        <p>
                                            <span>What we do</span>Utilizing Google's Sentiment Analysis,
                                              this website prompts the user to trade stocks when a positive
                                              Sentiment Analysis rating is given based off of news sources'
                                              reports. We believe that there's a positive correlation between 
                                              a more positive emotional expression in the news reports and
                                              a general increase in stock prices.
                                             
                    </p>

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

export default Typography;

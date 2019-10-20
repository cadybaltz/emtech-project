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
                                
                                <CardBody>
                                    <div>
                                        <h2>
                                            
                                            A New Way to Trade
                    </h2>
                                    </div>
                                    <div>
                                        <h5>
                                            
                                            A new perspective on stock market trading
                    </h5>
                                    </div>
                                    <div>
                                        <p>
                                             Utilizing Google's Sentiment Analysis,
                                              this website prompts the user to trade stocks when a positive
                                              Sentiment Analysis rating is given based off of news sources'
                                              reports. We believe that there's a positive correlation between 
                                              a more positive emotional expression in the news reports and
                                              a general increase in stock prices.
                                             
                    </p>

                                    </div>
                                    <div>
                                    <img
                                    alt="..."
                                    src={require("assets/img/stocks.jpg")}
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

export default Typography;

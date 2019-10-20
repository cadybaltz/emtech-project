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
                  <CardTitle tag="h5">News analysis is neutral at this time</CardTitle>
                  <p className="card-category">The current calculated sentiment analysis value is: </p>52.572720757580825
                </CardHeader>
                
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 2019-10-20 00:28
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

export default Dashboard;
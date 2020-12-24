import React from 'react'
import './App.css';
import purchaseServiceData from '../src/data.json'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
function App() {


  const [activeTab, setActiveTab] = React.useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  const sumOfSubServices = () => {
    let tempArray = []
    let priceData = 0
    purchaseServiceData.data.purchased_services.map((kIem) => {
      kIem.purchased_office_template.purchased_office_services.filter(x => x.service_selected !== undefined && x.service_selected !== null).map((aItem) => {
        tempArray.push(aItem)
        return 0;
      })
      return 0;
    })

    tempArray.forEach(item => {

      priceData += parseInt(item.price)
    })

    return priceData
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            PURCHASED SERVICES
        </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            ADDITIONAL SERVICES
        </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              {purchaseServiceData.data.purchased_services.map((pIem) => {
                return (
                  <>
                    {pIem.purchased_office_template.purchased_office_services.filter(x => x.service_selected !== undefined && x.service_selected !== null).length > 0 ? <b>{pIem.name}:</b> : ''}
                    {pIem.purchased_office_template.purchased_office_services.filter(x => x.service_selected !== undefined && x.service_selected !== null).map((aItem) => {

                      return (
                        <Card body>
                          <Row>
                            <Col sm="2">
                              <CardTitle><img src={aItem.image} alt="service"></img></CardTitle>
                            </Col>
                            <Col sm="8"><CardTitle><b>{aItem.name}</b></CardTitle>
                              <div>
                                <CardText>{aItem.description}</CardText>
                              </div>
                            </Col>
                            <Col sm="2">
                              <CardTitle><b>Kr {aItem.price},-</b></CardTitle>
                            </Col>
                          </Row>

                        </Card>
                      )
                    })}



                  </>
                )
              })}
              {purchaseServiceData.data.purchased_services.map((kIem) => {
                return (

                  kIem.purchased_office_template.purchased_office_services.filter(x => x.service_selected !== undefined && x.service_selected !== null).map((lItem) => {
                    return (

                      <Row className="bgcolor line">
                        <Col sm="10">
                          <CardTitle>{lItem.name}</CardTitle>
                        </Col>
                        <Col sm="2">
                          <CardTitle>Kr {lItem.price},-</CardTitle>
                        </Col>
                      </Row>


                    )
                  })
                )
              })}

              <Row className="bgcolor" >
                <Col sm="10">
                  <b>Total</b> :
              </Col>
                <Col sm="2">
                  Kr {sumOfSubServices()},-
              </Col>
              </Row>

            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              {purchaseServiceData.data.purchased_services.map((pIem) => {
                return (
                  <>
                    {pIem.purchased_office_template.purchased_office_services.filter(x => x.service_selected === undefined || x.service_selected === null).length > 0 ? <b>{pIem.name}:</b> : ''}
                    {pIem.purchased_office_template.purchased_office_services.filter(x => x.service_selected === undefined || x.service_selected === null).map((aItem) => {
                      return (
                        <Card body>
                          <Row>
                            <Col sm="2">
                              <CardTitle><img alt="service" src={aItem.image}></img></CardTitle>
                            </Col>
                            <Col sm="8"><CardTitle><b>{aItem.name}</b></CardTitle>
                              <div>
                                <CardText>{aItem.description}</CardText>
                              </div>
                            </Col>
                            <Col sm="2">
                              <CardTitle><b>Kr {aItem.price},-</b></CardTitle>
                            </Col>
                          </Row>

                        </Card>
                      )
                    })}


                  </>
                )
              })}
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default App;

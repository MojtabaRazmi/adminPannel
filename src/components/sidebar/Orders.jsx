import React, { Component } from 'react'
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane
} from 'reactstrap'
import classnames from 'classnames'
import ordersData from '../../utils/fakes/ordersData'



class Orders extends Component {

  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: '1',
    }
  }

  toggle (tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  cardBorder = (status) => {
    return status === 'done' ? 'border-success' :
        'border-danger'
  }

  badgeColor = (status) => {
    return status === 'done' ? 'success' :
      'danger'
  }

  OrderRow=(mappingDetails)=>{
    return(
      <div className="animated fadeIn">
        <Row>
          {mappingDetails.map((mappingDetail) =>
            <Col lg='6'>
              <Card key={mappingDetail.id} className={this.cardBorder(mappingDetail.status)}>
                <CardHeader> customer name : {mappingDetail.customerName}
                &emsp;&emsp;&emsp;&emsp;order date : {mappingDetail.ordDate}
                </CardHeader>
                <CardBody>
                  {mappingDetail.products.map((product)=>(
                    <a className='mr-2 w-25 d-inline-block'
                       href={`#/products/proteins-market/${mappingDetail.id}`}
                    >
                      {product}
                    </a>
                  ))}

                </CardBody>
                <CardFooter>
                  <i className="fa fa-money"/>
                  {` price : ${mappingDetail.ordPrice}`}
                  &emsp;&emsp;&emsp;&emsp;
                  <i className="fa fa-exclamation-circle"/>
                  <span>&nbsp;status : </span>
                  <Badge color={this.badgeColor(mappingDetail.status)}>
                    {mappingDetail.status}
                  </Badge>
                  <br/>
                  <i className="fa fa-address-book"/>
                  {` customer address : ${mappingDetail.customerAddress}`}
                </CardFooter>
              </Card>
            </Col>
          )}
        </Row>
      </div>
    )
  }

  render () {
    const doneOrders = ordersData.filter((order)=>order.status==='done')
    const waitingOrders = ordersData.filter((order)=>order.status==='waiting')
    return (
      <div className="animated fadeIn">
        <Row>
          <Col className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1') }}
                >
                  <i className="fa fa-asterisk"/>
                  <span className={this.state.activeTab === '1' ? '' : 'd-none'}>
                    ALL orders
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2') }}
                >
                  <i className="fa fa-check-square-o"/>
                  <span className={this.state.activeTab === '2' ? '' : 'd-none'}>
                    DONE orders
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3') }}
                >
                  <i className="fa fa-times-rectangle-o"/>
                  <span className={this.state.activeTab === '3' ? '' : 'd-none'}>
                    WAIT orders
                  </span>
                  <Badge pill color="danger">{waitingOrders.length}</Badge>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                {this.OrderRow(ordersData)}
              </TabPane>
              <TabPane tabId="2">
                {this.OrderRow(doneOrders)}
              </TabPane>
              <TabPane tabId="3">
                {this.OrderRow(waitingOrders)}
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Orders

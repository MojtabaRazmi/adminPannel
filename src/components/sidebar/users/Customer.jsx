import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap'

import customersDatas from './../../../utils/fakes/customersData'

class Customer extends Component {

  render () {

    const customer = customersDatas.find(
      customer => customer.id.toString() === this.props.match.params.id
    )

    const customerDetails = customer ? Object.entries(customer)
      : [['id', (<span><i className="text-muted icon-ban"/> Not found</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <strong><i className="fa fa-drivers-license-o pr-1"/> Customer id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                <Table responsive striped hover>
                  <tbody>
                  {
                    customerDetails.map(([key, customerDetail]) => {
                      return (
                        <tr key={key}>
                          <td>{`${key}:`}</td>
                          <td><strong>{customerDetail}</strong></td>
                        </tr>
                      )
                    })
                  }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Customer
import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import customersDatas from '../../../utils/fakes/customersData'

function UserRow(props) {
  const customer = props.customer
  const customerLink = `#/users/customers/${customer.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={customer.id.toString()}>
      <th scope="row"><a href={customerLink}>{customer.id}</a></th>
      <td><a href={customerLink}>{customer.name}</a></td>
      <td>{customer.registered}</td>
      <td>{customer.role}</td>
      <td><Badge href={customerLink} color={getBadge(customer.status)}>{customer.status}</Badge></td>
    </tr>
  )
}

class Customers extends Component {

  render() {

    // const customerList = customersData.filter((customer) => customer.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"/>
                Customers
                <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Customer name</th>
                    <th scope="col">registered</th>
                    <th scope="col">role</th>
                    <th scope="col">status</th>
                  </tr>
                  </thead>
                  <tbody>
                  {customersDatas.map((customerData, index) =>
                    <UserRow key={index} customer={customerData}/>
                  )}
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

export default Customers;

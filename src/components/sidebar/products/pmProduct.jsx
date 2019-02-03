import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap'

import productsData from './../../../utils/fakes/productsData'

class PmProduct extends Component {

  cardBorder = (supply) => {
    return supply <= 5 ? 'border-danger' :
      5 < supply && supply <= 10 ? 'border-warning' :
        'border-primary'
  }

  textDecoration=(supply)=>{
    return supply <= 5 ? 'text-danger' :
      5 < supply && supply <= 10 ? 'text-warning' :
        'text-primary'
  }

  supplyInfo=(supply)=>{
    return supply <= 5 ? `the Supply of this product is ${supply} and get ran out of. please charge it!` :
      5 < supply && supply <= 10 ? `the Supply is ${supply}.gonna to charge it!` :
        `don't worry about it`
  }

  render () {
    const product = productsData.find(
      product => product.id.toString() === this.props.match.params.id
    )

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card className={this.cardBorder(product.productSupply)}>
              <CardHeader>
                <strong><i className="fa fa-info pr-1"/> Customer id : {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                <Table responsive striped hover>
                  <tbody>
                  <tr>
                    <td>supply information : </td>
                    <td className={this.textDecoration(product.productSupply)}><strong>{this.supplyInfo(product.productSupply)} </strong></td>
                  </tr>
                  <tr>
                    <td>product ID:</td>
                    <td><strong>{product.id}</strong></td>
                  </tr>
                  <tr>
                    <td>product name : </td>
                    <td><strong>{product.productName}</strong></td>
                  </tr>
                  <tr>
                    <td>product price :</td>
                    <td><strong>{product.productPrice}</strong></td>
                  </tr>
                  <tr>
                    <td className='h-50 w-50'>product image : </td>
                    <td><strong>{product.productImage}</strong></td>
                  </tr>
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

export default PmProduct
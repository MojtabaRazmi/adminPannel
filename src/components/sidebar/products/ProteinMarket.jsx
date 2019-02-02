import React, { Component } from 'react'
import productsData from '../../../utils/fakes/productsData'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Row,
} from 'reactstrap'

class ProteinMarket extends Component {
  render () {
    return (
      <div className="animated fadeIn">
        <Row>
          {productsData.map((productData) =>
            <Col xs="6" sm="6" md="4" lg="3" xl="2">
              <Card key={productData.id}>
                <CardHeader> {productData.productName} </CardHeader>
                <CardBody>
                  {productData.productImage}
                </CardBody>
                <CardFooter>
                  {`price : ${productData.productPrice}`}
                </CardFooter>
              </Card>
            </Col>
          )}
        </Row>
      </div>
    )
  }
}

export default ProteinMarket

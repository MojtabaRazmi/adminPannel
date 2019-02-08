import React, { Component } from 'react'
import productsData from '../../../utils/fakes/productsData'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Row,
  Badge
} from 'reactstrap'

class ProteinMarket extends Component {
  //
  cardBorder=(supply)=>{
    return supply<=5 ? 'border-danger' :
      5<supply && supply<=10 ? 'border-warning':
        'border-primary'
  }

  badgeColor =(supply)=>{
    return supply<=5 ? 'danger' :
      5<supply && supply<=10 ? 'warning':
        'primary'
  }

  render () {

    return (
      <div className="animated fadeIn">
        <Row>
          {productsData.map((productData) =>
            <Col xs="6" sm="6" md="4" lg="3" xl="2">
              <Card key={productData.id} className={this.cardBorder(productData.productSupply)}>
                <CardHeader> {productData.productName} </CardHeader>
                <CardBody>
                  <a href={`/products/proteins-market/${productData.id}`}>
                  {productData.productImage}
                  </a>
                </CardBody>
                <CardFooter>
                  <i className="fa fa-money"/>
                  {` price : ${productData.productPrice}`}
                  <br/>
                  <i className="fa fa-cubes"/>
                  <span>&nbsp;supply : </span>
                  <Badge color={this.badgeColor(productData.productSupply)}>
                  {productData.productSupply}
                  </Badge>
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

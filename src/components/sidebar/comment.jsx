import React, { Component } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap'

import commentsData from './../../utils/fakes/commentsData'

class Customer extends Component {

  render () {

    const comment = commentsData.find(
      comment => comment.id.toString() === this.props.match.params.id
    )

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <strong><i className="fa fa-drivers-license-o pr-1"/> Comment id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                <Table responsive striped hover>
                  <tbody>
                  <tr>
                    <td>comment ID:</td>
                    <td><strong>{comment.id}</strong></td>
                  </tr>
                  <tr>
                    <td>user name :</td>
                    <td><strong>{comment.userName}</strong></td>
                  </tr>
                  <tr>
                    <td>date :</td>
                    <td><strong>{comment.date}</strong></td>
                  </tr>
                  <tr>
                    <td>comment :</td>
                    <td><strong>{comment.comment}</strong></td>
                  </tr>
                  <tr>
                    <td>reply :</td>
                    <td>
                      <strong>
                        {comment.reply === '' ? <Button><i className='fa fa-pencil'/> Tap To Reply</Button> : `${comment.reply}`}
                      </strong>
                    </td>
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

export default Customer
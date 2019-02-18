import React, { Component } from 'react'
import {
  Button, Card, CardBody, CardHeader, Col, Row, Table,
  Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap'

import commentsData from '../../../utils/fakes/commentsData'

class Customer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false,
      comment: 'masalan hamin'
    }
    this.toggle = this.toggle.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  toggle () {
    this.setState({
      modal: !this.state.modal,
    })
  }

  render () {
    const comment = commentsData.find(
      comment => comment.id.toString() === this.props.match.params.id
    )

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className='modal-lg modal-info'>
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                  <textarea className='w-100' placeholder={this.state.comment}
                            onChange={e => this.setState({ comment: e.target.value })}/>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>send reply</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
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
                        {comment.reply === ''
                          ? <Button onClick={this.toggle}><i className='fa fa-pencil'/> Tap To Reply</Button>
                          : (
                            <span>{comment.reply}
                                &emsp;
                              <Button onClick={this.toggle}><i className='fa fa-pencil'/> Tap To Edit Reply</Button>

                            </span>
                          )
                        }


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
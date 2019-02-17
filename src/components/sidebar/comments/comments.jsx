import React, { Component } from 'react'
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap'

import commentDatas from '../../../utils/fakes/commentsData'

function CommentRow (props) {
  const comment = props.comment
  const commentLink = `/comments/comment/${comment.id}`

  return (
    <tr key={comment.id.toString()}>
      <th scope="row"><a href={commentLink}>{comment.id}</a></th>
      <td><a href={commentLink}>{comment.userName}</a></td>
      <td>{comment.date}</td>
      <td>{comment.comment}</td>
      <td>
        <Badge href={commentLink} color={comment.reply === '' ? 'danger' : null}>
          {comment.reply === '' ? 'you have not reply this comment yet' : `${comment.reply}`}
        </Badge>
      </td>
    </tr>
  )
}

class Customers extends Component {

  render () {

    // const customerList = customersData.filter((comment) => comment.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"/>
                Customers
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">user name</th>
                    <th scope="col">date</th>
                    <th scope="col">comment</th>
                    <th scope="col">reply</th>
                  </tr>
                  </thead>
                  <tbody>
                  {commentDatas.map((commentData, index) =>
                    <CommentRow key={index} comment={commentData}/>
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

export default Customers

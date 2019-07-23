import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';


function PostItem(props) {
  const { item, user } = props;
  return (
    <Row>
      <Col md="12">
        <h2>{item.title}</h2>
        <span>{item.author}</span>
        <span>{item.created_utc}</span>
        <img src={item.thumbnail} alt={item.author} />
        <span>{item.num_comments}</span>
        <span>{user.visited[item.id]}</span>
      </Col>
    </Row>
  );
}

export const PostItemModel = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  created_utc: PropTypes.number,
  thumbnail: PropTypes.string,
  num_comments: PropTypes.number,
});

PostItem.propTypes = {
  item: PostItemModel.isRequired,
  user: PropTypes.shape({
    visited: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default PostItem;

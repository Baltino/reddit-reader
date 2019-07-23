import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';


function PostItem(props) {
  const { item } = props;
  return (
    <Row>
      <Col md="12">
        <h2>{item.title}</h2>
      </Col>
    </Row>
  );
}

PostItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default PostItem;

import React from 'react';
// reactstrap components
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { connect } from 'react-redux';

import { PostItemModel } from '../components/PostItem';

const Home = (props) => {
  const { currentPost } = props;

  return (
    <Container>
      <Row>
        <Col md="6">
          <h2>App</h2>
        </Col>
        <Col md="6">
          {currentPost.title}
        </Col>
      </Row>
    </Container>
  );
};

Home.propTypes = {
  currentPost: PostItemModel.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentPost: state.posts.currentPost,
  };
};

const HomeContainer = connect(mapStateToProps, {})(Home);

export default HomeContainer;

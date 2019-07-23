import React from 'react';
// reactstrap components
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { connect } from 'react-redux';

import { PostItemModel } from '../components/PostItem';
import { validThumbnail } from '../utils/utils';

const Home = (props) => {
  const { currentPost } = props;

  return (
    <Container>
      <Row>
        <Col md="12">
          <h1>{currentPost.author}</h1>
          <img src={validThumbnail(currentPost.thumbnail)} alt={currentPost.author} style={{ margin: '20px auto', display: 'block' }} />
          <p> {currentPost.title}</p>
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

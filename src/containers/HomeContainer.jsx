import React from 'react';
import PropTypes from 'prop-types';
// reactstrap components
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { connect } from 'react-redux';
// core components
import { getPosts } from '../actions/posts';


class Home extends React.Component {

  componendDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <Container>
        <Row>
          <Col md="6">
            <h2>App</h2>
          </Col>
          <Col md="6">
            Body
          </Col>
        </Row>       
      </Container>
    );
  }
}

Home.propTypes = {
  posts: PropTypes.shape([]).isRequired,
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

const HomeContainer = connect(mapStateToProps, {
  getPosts,
})(Home);

export default HomeContainer;

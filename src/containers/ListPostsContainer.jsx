import React from 'react';
import PropTypes from 'prop-types';
// reactstrap components
import {
  Row,
  Col,
} from 'reactstrap';
import { connect } from 'react-redux';
// core components
import PostItem, { PostItemModel } from '../components/PostItem';
import { getPosts } from '../actions/posts';


class Home extends React.Component {

  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    const { posts, user } = this.props;
    return (
      <Row style={{ width: 200 }}>
        <Col md="12">
          {posts.map(p => <PostItem item={p} user={user} key={p.id} />)}
        </Col>
      </Row>
    );
  }
}

Home.propTypes = {
  posts: PropTypes.arrayOf(PostItemModel).isRequired,
  user: PropTypes.shape({}).isRequired,
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    user: state.posts.user,
  };
};

const HomeContainer = connect(mapStateToProps, {
  getPosts,
})(Home);

export default HomeContainer;

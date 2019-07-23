import React from 'react';
import PropTypes from 'prop-types';
// reactstrap components
import {
  Row,
  Col,
} from 'reactstrap';
import { connect } from 'react-redux';
import { sizes } from '../components/constants';
// core components
import PostItem, { PostItemModel } from '../components/PostItem';
import { getPosts, setCurrentPost } from '../actions/posts';


class Home extends React.Component {

  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    const { posts, user, setCurrentPost } = this.props;
    return (
      <Row style={{ width: sizes.sidebarWidth }}>
        <Col md="12">
          {posts.map(p => <PostItem item={p} user={user} key={p.id} onClick={setCurrentPost} />)}
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
  setCurrentPost,
})(Home);

export default HomeContainer;

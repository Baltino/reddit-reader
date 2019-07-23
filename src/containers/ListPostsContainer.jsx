import React from 'react';
import PropTypes from 'prop-types';
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
    const { posts, user, setCurrentPost, getPosts, apiAfter } = this.props;
    return (
      <div style={{ width: sizes.sidebarWidth}} id="posts-list">
        {posts.map(p => <PostItem item={p} user={user} key={p.id} onClick={setCurrentPost} />)}
        <div >
          <span style={{ flaot: 'left' }} onClick={() => getPosts()} >
            Reset
          </span>
          <span style={{ float: 'right' }} onClick={() => getPosts(apiAfter)} >
            <i className="fas fa-chevron-right" />
          </span>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  posts: PropTypes.arrayOf(PostItemModel).isRequired,
  user: PropTypes.shape({}).isRequired,
  getPosts: PropTypes.func.isRequired,
  apiAfter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    user: state.posts.user,
    apiAfter: state.posts.apiAfter,
  };
};

const HomeContainer = connect(mapStateToProps, {
  getPosts,
  setCurrentPost,
})(Home);

export default HomeContainer;

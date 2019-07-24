import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sizes } from '../components/constants';
// core components
import PostItem, { PostItemModel, UserModel } from '../components/PostItem';
import { getPosts, setCurrentPost, dismissPost, dismissAllPosts } from '../actions/posts';


class Home extends React.Component {


  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    const { posts, user, setCurrentPost, getPosts, apiAfter, dismissPost, dismissAllPosts, statusRemovingPosts } = this.props;
    return (
      <div style={{ width: sizes.sidebarWidth }} id="posts-list">
        <ul className={statusRemovingPosts}>
          {posts.map(p => <PostItem item={p} user={user} key={p.id} onClick={setCurrentPost} onDismiss={dismissPost} />)}
        </ul>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ flaot: 'left' }} onClick={() => getPosts()} >
            Reset
          </span>
          <span style={{ flaot: 'left' }} onClick={() => dismissAllPosts()} >
            Dismiss all
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
  user: UserModel.isRequired,
  getPosts: PropTypes.func.isRequired,
  apiAfter: PropTypes.string.isRequired,
  dismissPost: PropTypes.func.isRequired,
  dismissAllPosts: PropTypes.func.isRequired,
  statusRemovingPosts: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    user: state.posts.user,
    apiAfter: state.posts.apiAfter,
    statusRemovingPosts: state.posts.statusRemovingPosts,
  };
};

const HomeContainer = connect(mapStateToProps, {
  getPosts,
  setCurrentPost,
  dismissPost,
  dismissAllPosts,
})(Home);

export default HomeContainer;

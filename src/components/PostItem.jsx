import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sizes, colors } from './constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.black};
`;
const TopBar = styled.div`
  float: left;
  font-size: ${sizes.mediumFont};
  color: ${colors.white};
  text-overflow: ellipsis;
  p {
    font-size: ${sizes.bigFont}px;
  }
  span {
    padding-left: 5px;
    font-size: ${sizes.smallFont}px;
    color: ${colors.gray};
  }
  flex: 1;
`;
const Middle = styled.div`
  flex: 3;
  display: flex;
  flex-direction: row;
  max-height: ${sizes.maxThumbnailHeight}px;
  overflow: hidden;
  margin-bottom: 5px;
  p {
    color: ${colors.gray};
    padding-left: 5px;
  }
  img {
    width: 80px;
    max-height: ${sizes.maxThumbnailHeight}px;
    cover: fit;
  }
`;
const BottomBar = styled.div`
  flex: 1;
  div {
    width: 50%;
    display: inline-block;
  }
`;
const Comments = styled.div`
  color: ${colors.orange};

`;
const ReadCircle = styled.div`
  background-color: ${colors.blue}
  visibility: ${props => props.read ? 'hidden' : 'show'};
  border-radius: 15px;
  width: 15px;
  height: 15px;
`;

const Button = styled.div`
  cursor: pointer;
  color: ${colors.white};
`;
function isValidThumbnail(t) {
  return t && t.indexOf('https://') === 0;
}

function PostItem(props) {
  const { item, user } = props;
  return (
    <Container>
      <TopBar>
        <ReadCircle read={user.visited[item.id]} />
        <p>
          {item.author}
          <span>{item.created_utc}</span>
        </p>
      </TopBar>
      <Middle>
        <img src={isValidThumbnail(item.thumbnail) ? item.thumbnail : '/logo.png'} alt={item.author} />
        <p>{item.title}</p>
        <i className="fas fa-chevron-right"  />
      </Middle>
      <BottomBar>
        <Button>
          <i className="fas fa-times-circle" style={{ color: colors.orange }}/>
          Dismiss Post
        </Button>
        <Comments>
          {item.num_comments}
          comments
        </Comments>
      </BottomBar>
    </Container>
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

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import { sizes, colors } from './constants';
import { validThumbnail } from '../utils/utils';


function PostItem(props) {
  const { item, user, onClick } = props;
  return (
    <Container onClick={() => onClick(item)}>
      <TopBar>
        <ReadCircle read={user.visited[item.id]} />
        <p>
          {item.author}
          <span>{moment.utc(item.created * 1000).fromNow()}</span>
        </p>
      </TopBar>
      <Middle>
        <img src={validThumbnail(item.thumbnail)} alt={item.author} />
        <p>{item.title}</p>
        <i className="fas fa-chevron-right" />
      </Middle>
      <BottomBar>
        <Button>
          <i className="fas fa-times-circle" style={{ color: colors.orange }} />
          Dismiss Post
        </Button>
        <Comments>
          {item.num_comments}
          <span>comments</span>
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
  onClick: PropTypes.func.isRequired,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.black};
  border-bottom: 2px solid ${colors.gray};
  padding: 5px 5px 10px 1px;
`;
const TopBar = styled.div`
  float: left;
  font-size: ${sizes.mediumFont};
  color: ${colors.white};
  text-overflow: ellipsis;
  p {
    display: inline-block;
    padding-left: 5px;
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
  i {
    color: white;
    padding-top: ${sizes.maxThumbnailHeight / 3}px;
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
  span {
    padding-left: 5px;
  }

`;
const ReadCircle = styled.div`
  background-color: ${colors.blue};
  display: inline-block;
  visibility: ${props => props.read ? 'hidden' : 'visible'};
  border-radius: 10px;
  width: 10px;
  height: 10px;
`;

const Button = styled.div`
  cursor: pointer;
  color: ${colors.white};
`;

export default PostItem;

import React from 'react';
import { Item, Content, Info, AddOns } from './CommentContent.style';
import CommentEditDelete from './CommentEditDelete';
import { useSelector } from 'react-redux';
import ProfileLink from '../utils/ProfileLink';
import formatTime from '../utils/formatTime';

function CommentContent({ CommentData, setIsEdit, type }) {
  const loginId = localStorage.getItem('memberId') + '';
  const memberId = CommentData.memberId + '';

  return (
    <Item.Content>
      <Content.Info>
        <ProfileLink
          profileUserId={memberId}
          element={<Info.Name>{CommentData.userName}</Info.Name>}
        />

        <Info.Content>{CommentData.content}</Info.Content>
      </Content.Info>
      <AddOns.Container>
        <AddOns.CreateAt>{formatTime(CommentData.createdAt)}</AddOns.CreateAt>
        {loginId === memberId ? (
          <CommentEditDelete
            CommentData={CommentData}
            commentId={CommentData.commentId}
            memberId={CommentData.memberId}
            setIsEdit={setIsEdit}
            type={type}
          />
        ) : undefined}
      </AddOns.Container>
    </Item.Content>
  );
}

export default CommentContent;

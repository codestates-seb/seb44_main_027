import React, { useState } from 'react';
import { Btn, EditMenu } from './CommentEditDelete.style';
import axios from 'axios';
import useUpdatePost from '../utils/hooks/useUpdatePost';
import { useApi } from '../utils/hooks/useApi';
import dotMenu from '/images/menu-dots.svg';

function CommentEditDelete({ CommentData, commentId, setIsEdit, type }) {
  const api = useApi();
  const loginId = localStorage.getItem('memberId') + '';
  const memberId = CommentData.memberId + '';
  const accessToken = localStorage.getItem('authToken');
  const url = `${import.meta.env.VITE_API_URL}/comments/${commentId}`;
  const [isLoding, setIsLoding] = useState(true);
  const isCrewing = type === 'crewing';
  const [update] = useUpdatePost(
    isCrewing ? CommentData.crewingId : CommentData.postId,
    type,
    setIsLoding
  );
  const [isClickEditMenu, setIsClickEditMenu] = useState(false);

  // 게시글 댓글 삭제 API
  const DeleteData = () => {
    api
      .delete(url, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        console.log('댓글 삭제 요청이 완료되었습니다.');
        update();
      })
      .catch((error) => {
        throw error;
      });
  };

  const handleClickDelete = () => {
    const confirmValue = confirm('정말로 삭제하시겠습니까?');

    // 로그인된 사용자와 게시글의 작성자가 같으면 삭제요청가능
    if (memberId === loginId && confirmValue) {
      setIsClickEditMenu(false);
      DeleteData();
    }
  };

  const handleClickEdit = () => {
    setIsClickEditMenu(false);
    setIsEdit(true);
  };
  const handleClickEditMenu = () => {
    setIsClickEditMenu(true);
  };
  const handleClickMenuCancel = () => {
    setIsClickEditMenu(false);
  };
  return (
    <>
      {isClickEditMenu ? (
        <Btn.Container>
          <Btn.Menu>
            <Btn.Edit onClick={handleClickEdit}>수정</Btn.Edit>
            <Btn.Delete onClick={handleClickDelete}>삭제</Btn.Delete>
            <Btn.cancel onClick={handleClickMenuCancel}>취소</Btn.cancel>
          </Btn.Menu>
        </Btn.Container>
      ) : (
        <EditMenu
          src={dotMenu}
          alt="수정메뉴아이콘"
          onClick={handleClickEditMenu}
        />
      )}
    </>
  );
}

export default CommentEditDelete;

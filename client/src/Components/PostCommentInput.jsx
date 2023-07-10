import React, { useRef, useState } from 'react';
import { InputContainer } from './PostCommentInput.style';
import axios from 'axios';
import { useSelector } from 'react-redux';
import useUpdatePost from '../utils/hooks/useUpdatePost';



function PostCommentInput() {
  const accessToken = sessionStorage.getItem('token');
  const url = `${import.meta.env.VITE_API_URL}/comments`;
  const [commentText, setCommentText] = useState('');
  const data = useSelector(state => state.postData.data.data);
  const [isLoding, setIsLodig] = useState(true);
  const [update] = useUpdatePost(data.postId, setIsLodig);



  // 로그인된 사용자의 멤버아이디
  const loginId = sessionStorage.getItem('memberId');

  //댓글작성 api
  const postData = () => {
    if (commentText !== '') {
      axios
        .post(
          url,
          {
            memberId: loginId,
            postsId: data.postId,
            content: commentText,
          },
          {
            headers: {
              Authorization: accessToken,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          update();
        })
        .catch((error) => {
          throw error;
        });
    }
  };

  const handleClick = () => {
    postData();

  };

  const textarea = useRef();

  const handleResizeHeight = (e) => {
    setCommentText(e.target.value);
    textarea.current.style.height = 'auto';
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };

  return (
    <InputContainer>
      <img
        src={data.userImageUrl}
        alt="내 프로필이미지"
      />
      <div>
        <textarea
          ref={textarea}
          type="text"
          placeholder="댓글달기"
          rows={1}
          onChange={handleResizeHeight}
          value={commentText}
        />
      </div>
      <button
        onClick={handleClick}
        disabled={commentText !== '' ? false : true}
      >
        게시
      </button>
    </InputContainer>
  );
}

export default PostCommentInput;
import React, { useEffect, useRef, useState } from 'react';
import { Modal, CloseBtn, NotFound } from './PostDetailModal.style';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PostDatailBox from './PostDetailBox.jsx';

function PostDetailModal({ postId, type, setIsModal }) {
  const closeIcon = faXmark;
  const [isNotFound, setIsNotFound] = useState(false);

  // 모달 닫기
  const closeModal = () => {
    setIsModal(false);
    window.history.back();
  };

  // 모달 밖의 영역 클릭 시 모달 닫기 로직
  const modalRef = useRef(null);
  useEffect(() => {
    function handleOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
    };
  }, []);

  return (
    <Modal>
      <div ref={modalRef}>
        {isNotFound ? (
          <NotFound>
            <h3>이런!</h3>
            <p>작성된 게시물이 없어요...</p>
          </NotFound>
        ) : (
          <PostDatailBox
            postId={postId}
            type={type}
            setIsNotFound={setIsNotFound}
          />
        )}
      </div>
      {/* 함수형 컴포넌트에서는 useRef를 사용할 수 없기때문에 useRef를 사용하기 위해 생성한 div 태그 */}
      <CloseBtn icon={closeIcon} onClick={closeModal} />
    </Modal>
  );
}

export default PostDetailModal;

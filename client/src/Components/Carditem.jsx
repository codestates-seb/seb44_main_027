import React, { useState } from 'react';
import { Card } from './Carditem.style';
import PostDetailModal from './PostDetailModal';
import commentIcon from '/images/comment.svg';

function Carditem({ item }) {
  const [isModal, setIsModal] = useState(false);
  const isDietPost = item.category === 'diet';

  const hendleClick = () => {
    setIsModal(!isModal);
    window.history.pushState({}, '', `/posts/${item.postId}`);
  };
  return (
    <>
      <Card onClick={hendleClick}>
        <img src={item.imageUrl} alt="카드이미지" />
        <div>
          {isDietPost && <p className="kal">{item.kcal} kal</p>}
          <div>
            <img src={commentIcon} alt="말풍선아이콘" />
            <p>{item.comments.length}</p>
          </div>
        </div>
      </Card>
      {isModal ? (
        <PostDetailModal
          postId={item.postId}
          type={'share'}
          setIsModal={setIsModal}
        />
      ) : undefined}
    </>
  );
}

export default Carditem;

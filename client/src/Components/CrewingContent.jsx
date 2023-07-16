import React, { useState } from 'react';
import {
  CrewingInfo,
  Label,
  Content,
  Container,
  CrewingParticipationBtn,
} from './CrewingContent.style';
import useUpdatePost from '../utils/hooks/useUpdatePost';
import axios from 'axios';

function CrewingContent({ data, type }) {
  const loginId = sessionStorage.getItem('memberId');
  const accessToken = sessionStorage.getItem('authToken');
  const url = `${import.meta.env.VITE_API_URL}/crewing/apply/${data.crewingId}`;
  const [isLoding, setIsLoding] = useState(true);
  const [update] = useUpdatePost(data.crewingId, type, setIsLoding);

  const participation = () => {
    axios
      .post(
        url,
        {
          crewing_id: data.crewingId,
          member_id: loginId,
        },
        {
          headers: {
            Authorization: accessToken,
          },
        }
      )
      .then((response) => {
        console.log('참가신청이 완료되었습니다.');
        update();
      })
      .catch((error) => {
        alert('모집이 마감되었어요.');
        update();
        throw error;
      });
  };

  const handleClick = () => {
    if (!data.completed) {
      participation();
    }
  };

  return (
    <Container>
      <CrewingInfo.Container>
        <CrewingInfo.ActivityDate>
          <Label>활동 날짜</Label>
          <Content>{data.activityDate}</Content>
        </CrewingInfo.ActivityDate>
        <CrewingInfo.DeadLine>
          <Label>모집마감일</Label>
          <Content>{data.deadLine}</Content>
        </CrewingInfo.DeadLine>
        <CrewingInfo.PersonnelStatus>
          <Label>모집인원</Label>
          <Content>{`${data.currentPeople} / ${data.maxPeople}`}</Content>
        </CrewingInfo.PersonnelStatus>
      </CrewingInfo.Container>
      <CrewingParticipationBtn
        className={!!data.completed ? 'closed' : undefined}
        onClick={handleClick}
      >
        {!!data.completed ? '모집 마감' : '참가 신청'}
      </CrewingParticipationBtn>
    </Container>
  );
}

export default CrewingContent;
package com.codestates.mainProject.likes.repository;


import com.codestates.mainProject.likes.entity.Likes;
import com.codestates.mainProject.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LikesRepository extends JpaRepository<Likes, Long> {
    Likes findByPostPostIdAndMemberMemberId(long postId, long memberId);
    Likes findByCrewingCrewingIdAndMemberMemberId(long crewingId, long memberId);
    Likes findByCommentCommentIdAndMemberMemberId(long commentId, long memberId);
}

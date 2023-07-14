package com.codestates.mainProject.likes.service;

import com.codestates.mainProject.comment.entity.Comment;
import com.codestates.mainProject.exception.BusinessLogicException;
import com.codestates.mainProject.exception.ExceptionCode;
import com.codestates.mainProject.likes.entity.Likes;
import com.codestates.mainProject.likes.repository.LikesRepository;
import com.codestates.mainProject.member.entity.Member;
import com.codestates.mainProject.member.repository.MemberRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LikesService {
    private final LikesRepository likesRepository;
    private final MemberRepository memberRepository;

    public LikesService(LikesRepository likesRepository, MemberRepository memberRepository) {
        this.likesRepository = likesRepository;
        this.memberRepository = memberRepository;
    }

    public Likes addLikes(Likes likes) {
        Long memberId = likes.getMember().getMemberId();

        String principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        Optional<Member> verifiedMember = memberRepository.findByEmail(principal);

        Member member = verifiedMember.
                orElseThrow(() -> new BusinessLogicException(ExceptionCode.NO_PERMISSION));

        likes.setMember(member);

        if(likes.getPost() != null) {
            Long postId = likes.getPost().getPostId();
            Likes existPostLikes = likesRepository.findByPostPostIdAndMemberMemberId(postId, memberId);
            if (existPostLikes != null) {
                cancelPostLike(postId, memberId);
            } else {
                likesRepository.save(likes);
            }
        }

        if(likes.getCrewing() != null) {
            Long crewingId = likes.getCrewing().getCrewingId();
            Likes existCrewingLikes = likesRepository.findByCrewingCrewingIdAndMemberMemberId(crewingId, memberId);
            if (existCrewingLikes != null) {
                cancelCrewingLike(crewingId, memberId);
            } else {
                likesRepository.save(likes);
            }
        }

        if(likes.getComment() != null) {
            Long commentId = likes.getComment().getCommentId();
            Likes existCommentLikes = likesRepository.findByCommentCommentIdAndMemberMemberId(commentId, memberId);
            if (existCommentLikes != null) {
                cancelCommentLike(commentId, memberId);
            } else {
                likesRepository.save(likes);
            }
        }

        return likes;
    }

    public void cancelPostLike(long postId, long memberId) {
        Likes likes = likesRepository.findByPostPostIdAndMemberMemberId(postId, memberId);

        likesRepository.delete(likes);
    }

    public void cancelCrewingLike(long crewingId, long memberId) {
        Likes likes = likesRepository.findByCrewingCrewingIdAndMemberMemberId(crewingId, memberId);

        likesRepository.delete(likes);
    }

    public void cancelCommentLike(long commentId, long memberId) {
        Likes likes = likesRepository.findByCommentCommentIdAndMemberMemberId(commentId, memberId);

        likesRepository.delete(likes);
    }

}

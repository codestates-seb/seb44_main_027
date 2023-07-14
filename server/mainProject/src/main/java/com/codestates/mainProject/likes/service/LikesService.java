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

    public Likes createLikes(Likes likes) {
        String principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        Optional<Member> verifiedMember = memberRepository.findByEmail(principal);

        Member member = verifiedMember.
                orElseThrow(() -> new BusinessLogicException(ExceptionCode.NO_PERMISSION));

        likes.setMember(member);

        return likesRepository.save(likes);
    }

    public void deleteLikes(long likesId) {
        
    }


}

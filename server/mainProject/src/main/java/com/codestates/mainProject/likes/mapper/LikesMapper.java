package com.codestates.mainProject.likes.mapper;

import com.codestates.mainProject.comment.entity.Comment;
import com.codestates.mainProject.crewing.entity.Crewing;
import com.codestates.mainProject.likes.dto.LikesDto;
import com.codestates.mainProject.likes.entity.Likes;
import com.codestates.mainProject.member.entity.Member;
import com.codestates.mainProject.posts.entity.Post;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface LikesMapper {

//    @Mapping(target = "member.memberId", source = "memberId")
//    @Mapping(target = "post.postId", source = "postId", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
//    @Mapping(target = "crewing.crewingId", source = "crewingId", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
//    @Mapping(target = "comment.commentId", source = "commentId", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
//    Likes likesPostToLikes(LikesDto.PostDto postDto);

    default Likes likesPostToLikes(LikesDto.PostDto postDto) {
        Likes likes = new Likes();

        Member member = new Member();
        member.setMemberId(postDto.getMemberId());
        likes.setMember(member);


        if(postDto.getPostId() != null) {
            Post post = new Post();
            post.setPostId(postDto.getPostId());
            likes.setPost(post);
        }

        if(postDto.getCrewingId() != null) {
            Crewing crewing = new Crewing();
            crewing.setCrewingId(postDto.getCrewingId());
            likes.setCrewing(crewing);
        }

        if(postDto.getCommentId() != null) {
            Comment comment = new Comment();
            comment.setCommentId(postDto.getCommentId());
            likes.setComment(comment);
        }

        return likes;
    }

    default LikesDto.Response likesToLikesResponse (Likes likes) {
        LikesDto.Response likesResponseDto = new LikesDto.Response();

        likesResponseDto.setLikesId(likes.getLikesId());
        likesResponseDto.setMember(likes.getMember());
        likesResponseDto.setPost(likes.getPost());
//        likesResponseDto.setCrewing(likes.getCrewing());
//        likesResponseDto.setComment(likes.getComment());

        return likesResponseDto;
    }
}

package com.codestates.mainProject.comment.mapper;

import com.codestates.mainProject.comment.dto.CommentDto;
import com.codestates.mainProject.comment.entity.Comment;
import com.codestates.mainProject.crewing.entity.Crewing;
import com.codestates.mainProject.member.entity.Member;
import com.codestates.mainProject.posts.entity.Post;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.ReportingPolicy;


@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CommentMapper {

//    @Mapping(target = "member.memberId", source = "memberId")
//    @Mapping(target = "post.postId", source = "postId", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
//    @Mapping(target = "crewing.crewingId", source = "crewingId", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
//    Comment commentPostToComment(CommentDto.PostDto requestBody);

    default Comment commentPostToComment(CommentDto.PostDto commentPostDto) {
        Comment comment = new Comment();
        comment.setContent(commentPostDto.getContent());

        Member member = new Member();
        member.setMemberId(commentPostDto.getMemberId());
        comment.setMember(member);


        if(commentPostDto.getPostId() != null) {
            Post post = new Post();
            post.setPostId(commentPostDto.getPostId());
            comment.setPost(post);
        }

        if(commentPostDto.getCrewingId() != null) {
            Crewing crewing = new Crewing();
            crewing.setCrewingId(commentPostDto.getCrewingId());
            comment.setCrewing(crewing);
        }

        return comment;
    }


    Comment commentPutToComment(CommentDto.Put requestBody);

//    @Mapping(target = "memberId", source = "member.memberId")
//    @Mapping(target = "userName", source = "member.userName")
//    @Mapping(target = "imageUrl", source = "member.imageUrl")
//    @Mapping(target = "postId", source = "post.postId", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
//    @Mapping(target = "crewingId", source = "crewing.crewingId", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
//    CommentDto.Response commentToCommentResponse(Comment comment);

    default CommentDto.Response commentToCommentResponse (Comment comment) {
        CommentDto.Response commentResponseDto = new CommentDto.Response();

        commentResponseDto.setCommentId(comment.getCommentId());
        commentResponseDto.setMember(comment.getMember());
        commentResponseDto.setPost(comment.getPost());
        commentResponseDto.setCrewing(comment.getCrewing());
        commentResponseDto.setContent(comment.getContent());
        commentResponseDto.setCreatedAt(comment.getCreatedAt());
        commentResponseDto.setModifiedAt(comment.getModifiedAt());

        return commentResponseDto;
    }
}

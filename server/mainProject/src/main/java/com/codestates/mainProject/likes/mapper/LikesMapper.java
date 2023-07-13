package com.codestates.mainProject.likes.mapper;

import com.codestates.mainProject.likes.dto.LikesDto;
import com.codestates.mainProject.likes.entity.Likes;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring")
interface LikesMapper {

    @Mapping(target = "member.memberId", source = "memberId")
    @Mapping(target = "post.postId", source = "postId", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(target = "crewing.crewingId", source = "crewingId", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(target = "comment.commentId", source = "commentId", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Likes likesPostToLikes(LikesDto.PostDto postDto);
}

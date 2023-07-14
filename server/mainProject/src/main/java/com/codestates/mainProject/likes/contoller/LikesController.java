package com.codestates.mainProject.likes.contoller;

import com.codestates.mainProject.likes.dto.LikesDto;
import com.codestates.mainProject.likes.entity.Likes;
import com.codestates.mainProject.likes.mapper.LikesMapper;
import com.codestates.mainProject.likes.service.LikesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/likes")
@Validated
public class LikesController {
    private final LikesService likesService;
    private final LikesMapper mapper;

    public LikesController(LikesService likesService, LikesMapper mapper) {
        this.likesService = likesService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postLikes(@Valid @RequestBody LikesDto.PostDto likesPostDto) {
        Likes likes = likesService.createLikes(mapper.likesPostToLikes(likesPostDto));

        return new ResponseEntity<>(HttpStatus.OK);
    }

}

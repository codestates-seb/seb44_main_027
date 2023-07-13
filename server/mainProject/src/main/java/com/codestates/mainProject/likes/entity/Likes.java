package com.codestates.mainProject.likes.entity;

import com.codestates.mainProject.comment.entity.Comment;
import com.codestates.mainProject.crewing.entity.Crewing;
import com.codestates.mainProject.member.entity.Member;
import com.codestates.mainProject.posts.entity.Post;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Likes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long likesId;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID", nullable = false)
    private Member member;

    @ManyToOne
    @JoinColumn(name = "POST_ID")
    private Post post;

    @ManyToOne
    @JoinColumn(name = "CREWING_ID")
    private Crewing crewing;

    @ManyToOne
    @JoinColumn(name = "POST_ID")
    private Comment comment;

}

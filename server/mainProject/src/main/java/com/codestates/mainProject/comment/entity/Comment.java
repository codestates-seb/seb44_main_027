package com.codestates.mainProject.comment.entity;

import com.codestates.mainProject.audit.Auditable;
import com.codestates.mainProject.crewing.entity.Crewing;
import com.codestates.mainProject.likes.entity.Likes;
import com.codestates.mainProject.member.entity.Member;
import com.codestates.mainProject.posts.entity.Post;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Comment extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @Column(nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID", nullable = false)
    private Member member;

    @ManyToOne
    @JoinColumn(name = "POST_ID")
    private Post post;

    @ManyToOne
    @JoinColumn(name = "CREWING_ID")
    private Crewing crewing;

//    @OneToMany(mappedBy = "comment", cascade = CascadeType.ALL)
//    private List<Likes> likes = new ArrayList<>();
}

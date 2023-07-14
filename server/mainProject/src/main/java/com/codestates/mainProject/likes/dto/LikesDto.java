package com.codestates.mainProject.likes.dto;


import com.codestates.mainProject.comment.entity.Comment;
import com.codestates.mainProject.crewing.entity.Crewing;
import com.codestates.mainProject.member.entity.Member;
import com.codestates.mainProject.posts.entity.Post;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.validation.constraints.Positive;

public class LikesDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PostDto {
        @Positive
        private long memberId;

        private Long postId;

        private Long crewingId;

        private Long commentId;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response {
        private long likesId;
        private long memberId;
        private Long postId;
        private Long crewingId;
        private Long commentId;

        public void setMember(Member member) {
            this.memberId = member.getMemberId();
        }

        public void setPost(Post post) {
            if(post != null) {
                this.postId = post.getPostId();
            }
        }

        public void setCrewing(Crewing crewing) {
            if(crewing != null) {
                this.crewingId = crewing.getCrewingId();
            }
        }

        public void setComment(Comment comment) {
            if(comment != null) {
                this.commentId = comment.getCommentId();
            }
        }
    }
}

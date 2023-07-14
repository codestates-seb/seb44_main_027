package com.codestates.mainProject.likes.repository;


import com.codestates.mainProject.likes.entity.Likes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikesRepository extends JpaRepository<Likes, Long> {

}

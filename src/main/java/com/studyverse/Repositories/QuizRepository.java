package com.studyverse.Repositories;

import com.studyverse.Models.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
    Quiz findQuizById (long id);

    Quiz findByTag(String tag);
}

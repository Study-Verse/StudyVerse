package com.studyverse.Repositories;

import com.studyverse.Models.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository <Question, Long> {
    Question findById(long id);
}

package com.studyverse.Repositories;

import com.studyverse.Models.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository <Answer, Long> {
    Answer findById(long id);
}

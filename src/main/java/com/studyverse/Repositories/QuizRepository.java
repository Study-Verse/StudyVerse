package com.studyverse.Repositories;

import com.studyverse.Models.Quiz;

public interface QuizRepository {
    Quiz findQuizById (long id);
}

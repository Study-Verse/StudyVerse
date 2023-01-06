package com.studyverse.Repositories;

import com.studyverse.Models.Question;

public interface QuestionRepository {
    Question findById(long id);
}

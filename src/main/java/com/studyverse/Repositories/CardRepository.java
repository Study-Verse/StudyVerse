package com.studyverse.Repositories;

import com.studyverse.Models.Card;

public interface CardRepository {
    Card findById(long id);

}

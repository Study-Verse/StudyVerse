package com.studyverse.Repositories;

import com.studyverse.Models.Card;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepository extends JpaRepository<Card, Long> {
    Card findById(long id);


}

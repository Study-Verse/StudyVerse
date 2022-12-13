package com.studyverse.Repositories;

import com.studyverse.Models.CardSet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardSetRepository extends JpaRepository<CardSet, Long> {
CardSet findById(long id);
}

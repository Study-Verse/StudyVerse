package com.studyverse.Repositories;

import com.studyverse.Models.CardSet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CardSetRepository extends JpaRepository<CardSet, Long> {
CardSet findById(long id);

List<CardSet> findByUserId(long id);

List<CardSet> findByTag(String tag);

}

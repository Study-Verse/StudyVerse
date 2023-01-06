package com.studyverse.Repositories;

import com.studyverse.Models.Card;
import com.studyverse.Models.Events;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventsRepository extends JpaRepository<Events, Long> {

    Events findById(long id);


}


package com.studyverse.Repositories;

import com.studyverse.Models.Calendar;
import com.studyverse.Models.Card;
import org.springframework.data.jpa.repository.JpaRepository;



public interface CalendarRepository extends JpaRepository <Calendar, Long>  {

    Calendar findById(long id);

}

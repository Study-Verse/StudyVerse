package com.studyverse.Controllers;

import com.studyverse.Models.Calendar;
import com.studyverse.Models.Events;
import com.studyverse.Models.User;
import com.studyverse.Repositories.CalendarRepository;
import com.studyverse.Repositories.CardRepository;
import com.studyverse.Repositories.EventsRepository;
import com.studyverse.Repositories.UserRepository;
import com.studyverse.Services.Utils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class CalendarController {

    private final CalendarRepository calendarDao;
    private final UserRepository usersDao;

    private final EventsRepository eventsDao;

    public CalendarController(CardRepository calendarDao, CalendarRepository calendarDao1, UserRepository usersDao, EventsRepository eventsDao) {
        this.calendarDao = calendarDao1;
        this.usersDao = usersDao;
        this.eventsDao = eventsDao;
    }




    @PostMapping("/addEvent")
    public String addEvent(Model model, @ModelAttribute Events events){
        User user = Utils.currentUser();
        Calendar calendar = calendarDao.findById(1);
        calendar.setUser(user);
        List<Events> eventsList = calendar.getEventsList();
        eventsList.add(events);
        calendar.setEventsList(eventsList);
        events.setUser(user);
        events.setCalendar(calendar);
        eventsDao.save(events);
        model.addAttribute("events", eventsDao);

        return "redirect:/profile";
    }



}

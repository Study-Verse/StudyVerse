package com.studyverse.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "calendar")
public class Calendar {

    @OneToOne
    private User user;



    @OneToMany
    @JsonBackReference
    private List<Events> eventsList;

    //Instance Variables
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;





//    Getters and Setters


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Events> getEventsList() {
        return eventsList;
    }

    public void setEventsList(List<Events> eventsList) {
        this.eventsList = eventsList;
    }


    //    Constructors


    public Calendar() {
    }

    public Calendar(long id) {
        this.id = id;
    }
}

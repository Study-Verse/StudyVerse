package com.studyverse.Models;

import javax.persistence.*;

@Entity
public class Calendar {

    //Instance Variables
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 500)
    private String events;





//    Getters And Setters


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEvents() {
        return events;
    }

    public void setEvents(String events) {
        this.events = events;
    }





//    Constructors


    public Calendar() {
    }


    public Calendar(long id) {
        this.id = id;
    }

    public Calendar(long id, String events) {
        this.id = id;
        this.events = events;
    }
}

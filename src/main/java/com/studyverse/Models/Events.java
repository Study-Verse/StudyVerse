package com.studyverse.Models;

import javax.persistence.*;


@Entity
@Table(name = "events")
public class Events {

    @ManyToOne
    private Calendar calendar;

    @ManyToOne
    private User user;



    //Instance Variables
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column (length = 500)
    private String title;



//    Getters and Setters


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Calendar getCalendar() {
        return calendar;
    }

    public void setCalendar(Calendar calendar) {
        this.calendar = calendar;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    //    Constructors


    public Events() {
    }

    public Events(String title) {
        this.title = title;
    }


}

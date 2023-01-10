package com.studyverse.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    //Instance Variables
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false, length = 80,unique = true)
    private String username;
    @Column(nullable = false, length = 100,unique = true)
    private String email;
    @Column(nullable = false, length = 200)
    private String password;

    @Column
    private String profilePic;


    @OneToMany(cascade = CascadeType.ALL,mappedBy = "user")
    @JsonBackReference
    private List<CardSet> cardSetList;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<Card> cardList;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "user")
    private Calendar calendar;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<Events> events;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    @JsonBackReference
    private List<Quiz> quizList;

    //End of Instance Variables

    //Constructors
    public User() {
    }
    public User(long id, String username, String email){
        this.username = username;
        this.email = email;
    }
    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    public User(long id, String username, String email, String password) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public User(long id, String username, String email, String password, String profilePic) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.profilePic = profilePic;
    }

    //End of Constructors


    //Setters and Getters
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public List<CardSet> getCardSetList() {
        return cardSetList;
    }
    public void setCardSetList(List<CardSet> cardSetList) {
        this.cardSetList = cardSetList;
    }
    public String getProfilePic() {
        return profilePic;
    }
    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }

    public List<Card> getCardList() {
        return cardList;
    }

    public void setCardList(List<Card> cardList) {
        this.cardList = cardList;
    }

    public Calendar getCalendar() {
        return calendar;
    }

    public void setCalendar(Calendar calendar) {
        this.calendar = calendar;
    }

    public List<Events> getEvents() {
        return events;
    }

    public void setEvents(List<Events> events) {
        this.events = events;
    }

    public List<Quiz> getQuiz() {
        return quizList;
    }

    public void setQuiz(List<Quiz> quizList) {
        this.quizList = quizList;
    }
}//End of class

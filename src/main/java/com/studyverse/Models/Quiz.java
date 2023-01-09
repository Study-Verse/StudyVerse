package com.studyverse.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String name;
    @Column
    private String tag;


    @OneToMany(cascade = CascadeType.ALL,mappedBy = "quiz")
    @JsonBackReference
    private List<Question> questionList;

    @ManyToOne
    @JsonManagedReference
    private User user;

// constructors
    public Quiz() {
    }

    public Quiz(long id) {
        this.id = id;
    }

    public Quiz(long id, String tag,String name) {
        this.id = id;
        this.tag = tag;
        this.name = name;
    }


    public Quiz(long id, String tag, List<Question> questionList) {
        this.id = id;
        this.tag = tag;
        this.questionList = questionList;
    }

    public Quiz(long id, String tag, List<Question> questionList, User user) {
        this.id = id;
        this.tag = tag;
        this.questionList = questionList;
        this.user = user;
    }

    //    setters and getters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Question> getQuestionList() {
        return questionList;
    }

    public void setQuestionList(List<Question> questionList) {
        this.questionList = questionList;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}

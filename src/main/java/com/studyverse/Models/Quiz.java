package com.studyverse.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    @OneToMany(cascade = CascadeType.ALL,mappedBy = "quiz")
    @JsonBackReference
    private List<Question> questionList;


// constructors
    public Quiz() {
    }

    public Quiz(long id) {
        this.id = id;
    }

    public Quiz(long id, List<Question> questionList) {
        this.id = id;
        this.questionList = questionList;
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
}

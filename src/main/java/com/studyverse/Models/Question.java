package com.studyverse.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 500)
    private String questionBody;

    @ManyToOne
    private Quiz quiz;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "question")
    @JsonBackReference
    private List<Answer> answerList;

//    constructors

    public Question() {
    }

    public Question(long id, String questionBody) {
        this.id = id;
        this.questionBody = questionBody;
    }

    public Question(long id, String questionBody, Quiz quiz, List<Answer> answerList) {
        this.id = id;
        this.questionBody = questionBody;
        this.quiz = quiz;
        this.answerList = answerList;
    }

//    setters and getters


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getQuestionBody() {
        return questionBody;
    }

    public void setQuestionBody(String questionBody) {
        this.questionBody = questionBody;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public List<Answer> getAnswerList() {
        return answerList;
    }

    public void setAnswerList(List<Answer> answerList) {
        this.answerList = answerList;
    }
}


package com.studyverse.Models;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 500)
    private String answerBody;

    @Column
    private boolean correctOrIncorrect;

    @ManyToOne
    @JsonManagedReference
    private Question question;

//   constructors


    public Answer() {
    }

    public Answer(long id, String answerBody, boolean correctOrIncorrect) {
        this.id = id;
        this.answerBody = answerBody;
        this.correctOrIncorrect = correctOrIncorrect;
    }

    public Answer(long id, String answerBody, boolean correctOrIncorrect, Question question) {
        this.id = id;
        this.answerBody = answerBody;
        this.correctOrIncorrect = correctOrIncorrect;
        this.question = question;
    }

//    setters and getters


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAnswerBody() {
        return answerBody;
    }

    public void setAnswerBody(String answerBody) {
        this.answerBody = answerBody;
    }

    public boolean isCorrectOrIncorrect() {
        return correctOrIncorrect;
    }

    public void setCorrectOrIncorrect(boolean correctOrIncorrect) {
        this.correctOrIncorrect = correctOrIncorrect;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }
}

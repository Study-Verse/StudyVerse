package com.studyverse.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;

import java.util.List;

@Entity
@Table(name = "cards")
public class Card {

//    variables

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String frontFace;

    @Column String backFace;


    @ManyToMany(mappedBy = "cardList")
    @JsonIgnore
    private List<CardSet> cardSetList;


//    constructors

    public Card() {
    }

    public Card(String frontFace, String backFace) {
        this.frontFace = frontFace;
        this.backFace = backFace;
    }

    public Card(long id, String frontFace, String backFace) {
        this.id = id;
        this.frontFace = frontFace;
        this.backFace = backFace;
    }
    //    setters and getters


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFrontFace() {
        return frontFace;
    }

    public void setFrontFace(String frontFace) {
        this.frontFace = frontFace;
    }

    public String getBackFace() {
        return backFace;
    }

    public void setBackFace(String backFace) {
        this.backFace = backFace;
    }
}

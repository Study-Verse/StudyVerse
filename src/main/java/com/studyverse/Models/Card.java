package com.studyverse.Models;

import jakarta.persistence.*;

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

    @ManyToMany
    @JoinTable(name = "card_sets_and_cards",
    joinColumns = {@JoinColumn(name = "")})
    private List<CardSet> cardSetList;


//    constructors

    public Card() {
    }

    public Card(String frontFace, String backFace) {
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

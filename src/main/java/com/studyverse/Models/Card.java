package com.studyverse.Models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cards")
public class Card {

    //Instance Variables
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column (length = 500)
    private String frontFace;
    @Column (length = 500)
    private String backFace;
    @ManyToMany(mappedBy = "cardList")
    @JsonIgnore
    private List<CardSet> cardSetList;
    @ManyToOne
    @JsonManagedReference
    private User user;



    //End of Variables




    //Constructors
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

    public Card(long id) {
        this.id = id;
    }

    //End of Constructors


    //Setters and Getters
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
    public List<CardSet> getCardSetList() {
        return cardSetList;
    }
    public void setCardSetList(List<CardSet> cardSetList) {
        this.cardSetList = cardSetList;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }


    //End of Setters and Getters
}//End of Class

package com.studyverse.Models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Card_Sets")
public class CardSet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false,length = 80)
    private String tag;

    @Column(nullable = false, length = 100)
    private String title;

    @ManyToMany
    @JoinTable
            (
            name = "card_sets_and_cards",
            joinColumns = {@JoinColumn(name = "card_set_id")},
            inverseJoinColumns ={@JoinColumn(name = "card_id")}
            )
    private List<Card> cardList;

//      Constructors
    public CardSet() {
    }

    public CardSet(String tag, String title) {
        this.tag = tag;
        this.title = title;
    }

    public CardSet(long id, String tag, String title) {
        this.id = id;
        this.tag = tag;
        this.title = title;
    }
//    Setters and getters

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Card> getCardList() {
        return cardList;
    }

    public void setCardList(List<Card> cardList) {
        this.cardList = cardList;
    }
}

package com.studyverse.Models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Card_Sets")
public class CardSet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String title;

    @ManyToMany
    @JoinTable
            (
            name = "card_sets_and_cards",
            joinColumns = {@JoinColumn(name = "card_set_id")},
            inverseJoinColumns ={@JoinColumn(name = "card_id")}
            )
    private List<Card> cardList;






}

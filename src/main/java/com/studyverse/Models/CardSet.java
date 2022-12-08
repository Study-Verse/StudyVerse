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

    @Column
    @ManyToMany(mappedBy = "cardList")
    private List<Card> cardList;






}

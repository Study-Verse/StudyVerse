package com.studyverse.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "Card_Sets")
public class CardSet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column




}

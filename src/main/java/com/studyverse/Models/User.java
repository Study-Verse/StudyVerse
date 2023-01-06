package com.studyverse.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    //Instance Variables
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false, length = 80,unique = true)
    private String username;
    @Column(nullable = false, length = 100,unique = true)
    private String email;
    @Column(nullable = false, length = 200)
    private String password;
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "user")
    @JsonBackReference
    private List<CardSet> cardSetList;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<Card> cardList;
    @Column
    private String profilePic;
    //End of Instance Variables

    //Constructors
    public User() {
    }
    public User(long id, String username, String email){
        this.username = username;
        this.email = email;
    }
    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    public User(long id, String username, String email, String password) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    //End of Constructors


    //Setters and Getters
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public List<CardSet> getCardSetList() {
        return cardSetList;
    }
    public void setCardSetList(List<CardSet> cardSetList) {
        this.cardSetList = cardSetList;
    }
    public String getProfilePic() {
        return profilePic;
    }
    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }


}//End of class

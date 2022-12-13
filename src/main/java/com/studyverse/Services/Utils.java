package com.studyverse.Services;

import com.studyverse.Models.CardSet;
import com.studyverse.Models.User;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.List;


public class Utils {

    public static User currentUser(){
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    public static List<CardSet> currentUserCardSets(){
        return ((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getCardSetList();
    }



}

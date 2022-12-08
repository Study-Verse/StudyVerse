package com.studyverse.Controllers;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

public class CardController {

    @GetMapping()
    public String landingPage(){
        return "splashpage";
    }


}// END OF CARD CONTROLLER

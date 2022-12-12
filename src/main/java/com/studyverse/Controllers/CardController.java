package com.studyverse.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class CardController {

    @GetMapping()
    public String landingPage(){
        return "splashpage";
    }



}// END OF CARD CONTROLLER

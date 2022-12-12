package com.studyverse.Controllers;

import com.studyverse.Models.Card;
import com.studyverse.Models.User;
import com.studyverse.Repositories.CardRepository;
import com.studyverse.Repositories.UserRepository;
import com.studyverse.Services.Utils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/flash")
public class CardController {

    private final CardRepository cardDao;
    private final UserRepository userDao;

    public CardController(CardRepository cardDao, UserRepository userDao) {
        this.cardDao = cardDao;
        this.userDao = userDao;
    }

    @GetMapping("/")
    public String landingPage(){
        return "splashpage";
    }


//    This lets you create a card set
    @GetMapping("/create")
    public String createCard(Model model){
        List<User>users = userDao.findAll();
        model.addAttribute("users", users);
        model.addAttribute("card", new Card());
        return "createCard";
    }



//    This let you post your card set
    @PostMapping("/create")
    public String postCard(@ModelAttribute Card card){
        User user = Utils.currentUser();
        card.setUser(user);
        cardDao.save(card);
        return "redirect:/flash/create";
    }



}// END OF CARD CONTROLLER

// Added notes for commit
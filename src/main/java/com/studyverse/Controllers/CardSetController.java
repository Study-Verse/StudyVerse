package com.studyverse.Controllers;

import com.studyverse.Models.CardSet;
import com.studyverse.Models.User;
import com.studyverse.Repositories.CardSetRepository;
import com.studyverse.Services.Utils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class CardSetController {

    private final CardSetRepository cardSetDao;

    public CardSetController(CardSetRepository cardSetDao) {
        this.cardSetDao = cardSetDao;
    }


    @GetMapping("/create-set")
    public String createCardSetForm(Model model){
        model.addAttribute("newCardSet", new CardSet());
        return "/cardset-create";
    }

    @PostMapping("/create-set")
    public String createCardSet(@ModelAttribute CardSet cardSet){
        User user = Utils.currentUser();
        cardSet.setUser(user);
        cardSetDao.save(cardSet);
        return "redirect:/card-create";
    }



}//End of class

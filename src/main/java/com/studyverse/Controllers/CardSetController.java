package com.studyverse.Controllers;

import com.studyverse.Models.CardSet;
import com.studyverse.Repositories.CardSetRepository;
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


    @GetMapping
    public String createCardSetForm(Model model){
        model.addAttribute("new-card-set", new CardSet());
        return "/cardset-create";
    }

    @PostMapping
    public String createCardSet(@ModelAttribute CardSet cardSet){
        cardSetDao.save(cardSet);
        return "redirect:/cardCreate";
    }



}

package com.studyverse.Controllers;

import com.studyverse.Models.Card;
import com.studyverse.Models.CardSet;
import com.studyverse.Models.User;
import com.studyverse.Repositories.CardRepository;
import com.studyverse.Repositories.CardSetRepository;
import com.studyverse.Repositories.UserRepository;
import com.studyverse.Services.Utils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/")
public class CardController {

    private final CardRepository cardDao;
    private final UserRepository userDao;
    private final CardSetRepository cardSetDao;

    public CardController(CardRepository cardDao, UserRepository userDao, CardSetRepository cardSetDao) {
        this.cardDao = cardDao;
        this.userDao = userDao;
        this.cardSetDao = cardSetDao;
    }

//  cards api call
    @GetMapping("card-api/{id}")
    public @ResponseBody List<Card> cardsApi(@PathVariable long id) {
        return cardSetDao.findById(id).getCardList();
    }

    @GetMapping
    public String landingPage(){
        return "splashpage";
    }


    //    This lets you create a card
    @GetMapping("card-create/{setId}")
    public String createCard(Model model, @PathVariable long setId){
        CardSet set = cardSetDao.findById(setId);
        model.addAttribute("cardSet", set);
        model.addAttribute("cardList",set.getCardList());
        Card newCard = new Card();
        model.addAttribute("card", newCard);
        return "/createCard";
    }

    @PostMapping("card-create/{setId}")
    public String postCard(@PathVariable long setId, @ModelAttribute Card card){
        User user = Utils.currentUser();
        card.setUser(user);
        cardSetDao.findById(setId).getCardList().add(card);
        cardDao.save(card);
        card.setCardSetList(new ArrayList<>());
        card.getCardSetList().add(cardSetDao.findById(setId));
        return "redirect:/card-create/" + setId;
    }


//        ============ study get mapping
    @GetMapping("study-cards/{id}")
    public String studyCards(Model model, @PathVariable long id) {
        model.addAttribute("eachCard", cardSetDao.findById(id).getCardList());
        return "/study";

    }
    //    ============ self test get mapping
    @GetMapping("self-test")
    public String test(){
        return "/self-test";
    }


}// END OF CARD CONTROLLER


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

//    Method to add a card set to a new card
//    public Card addingCardSetIdToCardList (Card card, long id){
////
////        CardSet cardSet = cardSetDao.findById(id);
////
////        List<Card> cardList = cardSet.getCardList();
////
////        cardList.add(cardList.size()+1, card);
////
////        cardSetDao.save(cardSet);
//    return card;
//    }
////    Method to add a card set to a new card
//    public Card addingCardSetIdToCardList (Card card, long id){
////      for the given card access its list of card Sets it belongs to
//        List<CardSet> cardSetList = card.getCardSetList();
//        if (cardSetList == null){
//            cardSetList.add(cardSetDao.findById(id));
//        } else {
////      add the given cardSet id to the list of card sets it belongs to
//        cardSetList.add(cardSetList.size()+1, cardSetDao.findById(id));
////      set the newly modified card set list
//        card.setCardSetList(cardSetList);
//        }
////      finally save the modified card
//        cardDao.save(card);
//        return card;
//    }

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
    @GetMapping("card-create/{id}")
    public String createCard(Model model, @PathVariable long id){
        CardSet set = cardSetDao.findById(id);
        List<Card> cardList = set.getCardList();
        model.addAttribute("cardSet", set);
        model.addAttribute("cardList",cardList);
        model.addAttribute("card", new Card());

        return "/createCard";
    }

//    This let you post your card set
//<<<<<<< HEAD
//    @PostMapping("create")
//    public String postCard(@ModelAttribute Card card,@ModelAttribute CardSet set){
//        User user = Utils.currentUser();
//
//        long id = set.getId();
//
//        CardSet cardSet = cardSetDao.findById(id);
//
//        List<Card> cardList = cardSet.getCardList();
//
//        card.setUser(user);
//
//        cardDao.save(card);
//
//        cardList.add(card);
//
//        cardSetDao.save(cardSet);
//
//
//        return "redirect:/card-create/{id}";
//=======
    @PostMapping("card-create/{id}")
    public String postCard(@ModelAttribute Card card, @ModelAttribute List<Card>cardList){
        CardSet set = new CardSet();
        User user = Utils.currentUser();
        cardList.add(card);
        set.setCardList(cardList);
        card.setUser(user);

        cardDao.save(card);
        return "redirect:/card-create/{id}";

    }

//        ============ study get mapping

    @GetMapping("study-cards/{id}")
    public String studyCards() {
        return "/study";
    }



    //    ============ self test get mapping
    @GetMapping("self-test")
    public String test(){
        return "/self-test";
    }


//  This takes you to the create card html
    @GetMapping("/create")
    public String createCards(Model model){
        model.addAttribute("card", new Card());
        return "/createCard";
    }

}// END OF CARD CONTROLLER


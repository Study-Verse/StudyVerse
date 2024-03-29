package com.studyverse.Controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.studyverse.Models.Card;
import com.studyverse.Models.CardSet;
import com.studyverse.Models.User;
import com.studyverse.Repositories.CardRepository;
import com.studyverse.Repositories.CardSetRepository;
import com.studyverse.Repositories.UserRepository;
import com.studyverse.Services.Utils;
import org.springframework.security.core.context.SecurityContextHolder;
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
    public String landingPage(Model model) {
       // check if the user is logged in or registered
        if(!SecurityContextHolder.getContext().getAuthentication().getPrincipal().equals("anonymousUser")) {
            model.addAttribute("user",userDao.findById(Utils.currentUser().getId()));
        } else {
            // here user is either not logged in or not registered
            model.addAttribute("user", null);
        }
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
        return "createCard";
    }

    @PostMapping("card-create/{setId}")
    public String postCard(@PathVariable long setId, @ModelAttribute Card card){
        User user = Utils.currentUser();
        if (card.getFrontFace() != "" && card.getBackFace() !="" ){
            card.setUser(user);
            cardSetDao.findById(setId).getCardList().add(card);
            cardDao.save(card);
            card.setCardSetList(new ArrayList<>());
            card.getCardSetList().add(cardSetDao.findById(setId));
            return "redirect:/card-create/" + setId;
        }

        return "redirect:/card-create/" + setId;
    }

    @PostMapping("/edit-card/{cardId}/{cardSetId}")
    public String editCard(@RequestParam (name="editFrontFace") String frontFace,
                           @RequestParam (name="editBackFace") String backFace, @PathVariable long cardId, @PathVariable long cardSetId){
       Card editedCard = cardDao.findById(cardId);
       editedCard.setFrontFace(frontFace);
       editedCard.setBackFace(backFace);
       cardDao.save(editedCard);
        return "redirect:/card-create/" + cardSetId;
    }

    @PostMapping("/delete-card/{cardId}/{cardSetId}")
    public String deleteCard(@PathVariable long cardId, @PathVariable long cardSetId){
        Card cardToDelete = cardDao.findById(cardId);
        cardSetDao.findById(cardSetId).getCardList().remove(cardToDelete);
        cardDao.delete(cardToDelete);
        return "redirect:/card-create/" + cardSetId;
    }
//        ============ study get mapping
    @GetMapping("study-cards/{id}")
    public String studyCards(Model model, @PathVariable long id) {
        if(cardSetDao.findById(id).getCardList().size() != 0){
            model.addAttribute("cardSet", cardSetDao.findById(id));
            model.addAttribute("eachCard", cardSetDao.findById(id).getCardList());
            return "study";
        } else {
           return "redirect:/card-create/" + id;
        }

    }



}// END OF CARD CONTROLLER


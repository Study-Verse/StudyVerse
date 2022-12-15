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
    @GetMapping("card-create")
    public String createCard(Model model){
        List<User>users = userDao.findAll();
        model.addAttribute("users", users);
        model.addAttribute("card", new Card());
        return "/createCard";
    }



//    This let you post your card set
    @PostMapping("create")
    public String postCard(@ModelAttribute Card card){
        User user = Utils.currentUser();
        card.setUser(user);
        cardDao.save(card);
        return "redirect:/card-create";
    }


//        ============ study get mapping
    @GetMapping("study-cards/{id}")
    public String studyCards(@PathVariable long id,Model model) {
       model.addAttribute("cardSet",cardSetDao.findById(id));
        return "/study";
    }



    //    ============ self test get mapping
    @GetMapping("self-test")
    public String test(){
        return "/self-test";
    }
}// END OF CARD CONTROLLER


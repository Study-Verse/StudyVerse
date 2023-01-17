package com.studyverse.Controllers;

import com.studyverse.Models.Card;
import com.studyverse.Models.CardSet;
import com.studyverse.Models.User;
import com.studyverse.Repositories.CardRepository;
import com.studyverse.Repositories.CardSetRepository;
import com.studyverse.Repositories.UserRepository;
import com.studyverse.Services.Utils;
import jdk.jshell.execution.Util;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@Controller
public class CardSetController {
    //Repositories
    private final CardRepository cardDao;
    private final CardSetRepository cardSetDao;
    private final UserRepository userDao;
    //End of Repositories

    //Constructor
    public CardSetController(CardRepository cardDao, CardSetRepository cardSetDao, UserRepository userDao) {
        this.cardDao = cardDao;
        this.cardSetDao = cardSetDao;
        this.userDao = userDao;
    }
    //End of Constructor

    //CREATE SET
    @PostMapping("/create-set")
    public String createCardSet(@RequestParam(name="set-title") String title, @RequestParam(name="set-tag") String tag){
        User user = Utils.currentUser();
        CardSet cardSet = new CardSet();
        if (title != ""){
            cardSet.setTitle(title);
            cardSet.setTag(tag);
            cardSet.setUser(user);
            cardSetDao.save(cardSet);
            return "redirect:/card-create/" + cardSet.getId();
        }
            return "redirect:/dashboard";
    }
    //END OF CREATE SET

    //EDIT SET
    @PostMapping("/card-set-edit/{cardId}")
    public String submitCardSetEdit(@RequestParam(name="edit-title") String title, @RequestParam(name="edit-tag") String tag, @PathVariable long cardId){
        CardSet editCard = cardSetDao.findById(cardId);
        editCard.setTitle(title);
        editCard.setTag(tag);
        cardSetDao.save(editCard);
        return "redirect:/dashboard";
    }
    //END OF EDIT SET

    //DELETE SET
    @GetMapping("/{id}/delete")
    public String deleteCardSet(@PathVariable long id, CardSet cardSet){
        User user = Utils.currentUser();
        cardSet.setUser(user);
        CardSet card = cardSetDao.findById(id);
        cardSetDao.delete(card);
        return "redirect:/dashboard";
    }

//    @ExceptionHandler(NoSuchElementException.class)
//    @ResponseStatus(HttpStatus.NOT_FOUND)
//    public ResponseEntity<String> handleNoSuchElementFoundException(NoSuchElementException exception) {
//        return ResponseEntity
//                .status(HttpStatus.NOT_FOUND)
//                .body(exception.getMessage());
//    }
    //END OF DELETE SET

    //    ============ dashboard get mapping
    @GetMapping("/dashboard")
    public String dashboard(Model model){
        long user = Utils.currentUser().getId();
        List<CardSet> cardSetList = cardSetDao.findByUserId(user);
        model.addAttribute("cardSetList",cardSetList);
        model.addAttribute("user",userDao.findById(user));
        return "dashboard";
    }

    //    This is the Search view
    @GetMapping("/search/{tag}")
    public String searchView(Model model, @PathVariable String tag){
        model.addAttribute("cardSets", cardSetDao.findByTag(tag));
        model.addAttribute("user",userDao.findById(Utils.currentUser().getId()));
        return "searchView";
    }


}//End of class

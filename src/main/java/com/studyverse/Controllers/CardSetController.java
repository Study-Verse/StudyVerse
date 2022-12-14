package com.studyverse.Controllers;

import com.studyverse.Models.CardSet;
import com.studyverse.Models.User;
import com.studyverse.Repositories.CardSetRepository;
import com.studyverse.Repositories.UserRepository;
import com.studyverse.Services.Utils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class CardSetController {

    private final CardSetRepository cardSetDao;

    private final UserRepository userDao;

    public CardSetController(CardSetRepository cardSetDao, UserRepository userDao) {
        this.cardSetDao = cardSetDao;
        this.userDao = userDao;
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

    //    ============ dashboard get mapping
    @GetMapping("/dashboard")
    public String dashboard(Model model){
        long user = Utils.currentUser().getId();
        List<CardSet> cardSetList = cardSetDao.findByUserId(user);
        model.addAttribute("cardSetList",cardSetList);
        return "/dashboard";
    }


    @PostMapping("/card-set-edit/{cardId}")
    public String submitCardSetEdit(@RequestParam(name="edit-title") String title,
                                    @RequestParam(name="edit-tag") String tag, @PathVariable long cardId){
        CardSet editCard = cardSetDao.findById(cardId);
        editCard.setTitle(title);
        editCard.setTag(tag);
        cardSetDao.save(editCard);
        return "redirect:/dashboard";
    }






//    This deletes the card
    @GetMapping("/{id}/delete")
    public String deleteCardSet(@PathVariable long id, CardSet cardSet){
        User user = Utils.currentUser();
        cardSet.setUser(user);
        CardSet card = cardSetDao.findById(id);
        cardSetDao.delete(card);
        return "redirect:/dashboard";
    }

}//End of class

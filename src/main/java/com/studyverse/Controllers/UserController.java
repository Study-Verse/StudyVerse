package com.studyverse.Controllers;

import com.studyverse.Models.CardSet;
import com.studyverse.Models.User;
import com.studyverse.Repositories.UserRepository;
import com.studyverse.Services.Utils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class UserController {

    private final UserRepository usersDao;

    private final PasswordEncoder passwordEncoder;

    public UserController(UserRepository usersDao, PasswordEncoder passwordEncoder) {
        this.usersDao = usersDao;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping("/register")
    public String showRegistrationForm(Model model){
        model.addAttribute("user", new User());
        return "/register";
    }

    @PostMapping("/register")
    public String registerUser(@ModelAttribute User user){

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        usersDao.save(user);
        return "redirect:/login";
    }




    //    ============ dashboard get mapping
    @GetMapping("/dashboard")
    public String dashboard(Model model){
//        getting logged in user
        User user = Utils.currentUser();
//        getting the list of card sets the current user has
        List<CardSet> cardSetList = user.getCardSetList();
//        passing that list to the view via model attribute
        model.addAttribute("cardSetList",cardSetList);
        return "/dashboard";
    }
} // End of UserController

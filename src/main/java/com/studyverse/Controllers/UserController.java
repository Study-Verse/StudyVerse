package com.studyverse.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController {

    @GetMapping("/register")
    public String showRegistrationForm(Model model){
//        model.addAttribute("user", new User());
        return "/registration";
    }


//    @PostMapping("/register")
//    public String registerUser(@ModelAttribute User user){
//
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        usersDao.save(user);
//        return "redirect:/blogs";
//    }



} // End of UserController

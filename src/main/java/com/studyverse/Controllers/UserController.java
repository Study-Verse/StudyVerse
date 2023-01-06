package com.studyverse.Controllers;

import com.studyverse.Models.CardSet;
import com.studyverse.Models.User;
import com.studyverse.Repositories.UserRepository;
import com.studyverse.Services.Utils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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


//    Takes you to the profile

    @GetMapping("/profile")
    public String profile(Model model){
        model.addAttribute("user",usersDao.findById(Utils.currentUser().getId()));
        return "/profile";
    }

//  Edit profile
    @PostMapping ("/profile")
    String editProfile(@RequestParam(name="username") String username, @RequestParam(name="email")String email, @RequestParam(name="id") long id, Model model){
        model.addAttribute("user",usersDao.findById(Utils.currentUser().getId()));
        User user = usersDao.findById(id);
        user.setUsername(username);
        user.setEmail(email);
        usersDao.save(user);
        return "profile";
    }

    @PostMapping("/uploadPic")
    public String getProfilePic(@RequestParam(name="picUrl") String url){
        User currentUser = Utils.currentUser();
        currentUser.setProfilePictureURL(url);
        return "redirect:/profile";
    }

} // End of UserController

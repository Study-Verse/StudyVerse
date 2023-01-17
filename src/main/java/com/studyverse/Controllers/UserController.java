package com.studyverse.Controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.studyverse.Models.Calendar;
import com.studyverse.Models.Events;
import com.studyverse.Models.User;
import com.studyverse.Repositories.EventsRepository;
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

    private final EventsRepository eventsDao;

    public UserController(UserRepository usersDao, PasswordEncoder passwordEncoder, EventsRepository eventsDao) {
        this.usersDao = usersDao;
        this.passwordEncoder = passwordEncoder;
        this.eventsDao = eventsDao;
    }

    @GetMapping("/register")
    public String showRegistrationForm(Model model){
        model.addAttribute("user", new User());
        return "register";
    }

    @PostMapping("/register")
    public String registerUser(@ModelAttribute User user){
        if (!user.getEmail().isEmpty() || !user.getPassword().isEmpty() || !user.getUsername().isEmpty()) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            usersDao.save(user);
            return "redirect:/login";

        }
            return "redirect:/register";
    }

//    Takes you to the profile
    @GetMapping("/profile")
    public String profile(Model model){
        model.addAttribute("user",usersDao.findById(Utils.currentUser().getId()));
        model.addAttribute("events", new Events());
        model.addAttribute("calender", new Calendar());
        model.addAttribute("currentEvents", usersDao.findById(Utils.currentUser().getId()).getEvents());
        return "profile";
    }

//  Edit profile
    @PostMapping ("/profile")
    public @ResponseBody void editProfile(@RequestBody User editedUser, Model model) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        System.out.println("inside edit profile");
        System.out.printf("editedUser: %n%s%n", mapper.writeValueAsString(editedUser));
        User user = usersDao.findById(Utils.currentUser().getId());
        user.setUsername(editedUser.getUsername());
        user.setEmail(editedUser.getEmail());
        System.out.printf("User we will save after changing: %n%s%n", mapper.writeValueAsString(user));
        usersDao.save(user);
    }

    @PostMapping("/profilePic")
    public String profilePic(@RequestParam(name="profilePicInput") String url){
        User user = usersDao.findById(Utils.currentUser().getId());
        user.setProfilePic(url);
        usersDao.save(user);
        return "redirect:/profile";
    }

} // End of UserController

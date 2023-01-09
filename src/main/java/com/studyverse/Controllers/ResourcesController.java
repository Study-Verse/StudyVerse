package com.studyverse.Controllers;

import com.studyverse.Repositories.UserRepository;
import com.studyverse.Services.Utils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ResourcesController {

    private final UserRepository userDao;

    public ResourcesController(UserRepository userDao){
        this.userDao = userDao;
    }

    @GetMapping("/books")
    public String showBookPage(Model model) {
        model.addAttribute("user",userDao.findById(Utils.currentUser().getId()));
        return "resources";
    }


    @GetMapping("/bookView")
    public String showBookView1(){
        return "bookView";
    }

    @GetMapping("/bookView/{isbn}")
    public String showSingleBook(@PathVariable long isbn) {
        String returnString = "redirect:/bookView?isbn=" + isbn;
        return returnString;
    }




//     View for wikipedia

    @GetMapping("/wiki")
    public String showWiki(Model model){
        model.addAttribute("user",userDao.findById(Utils.currentUser().getId()));
        return "wikipedia";
    }



//    About Us view
    @GetMapping("/about-us")
    public String aboutUs(Model model) {
        model.addAttribute("user",userDao.findById(Utils.currentUser().getId()));
        return "about-us";
    }

}

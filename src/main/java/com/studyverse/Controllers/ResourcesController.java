package com.studyverse.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ResourcesController {

    @GetMapping("/books")
    public String showBookPage() {
        return "/resources";
    }


    @GetMapping("/bookView")
    public String showBookView1(){
        return "/bookView";
    }

    @GetMapping("/bookView/{isbn}")
    public String showSingleBook(@PathVariable long isbn) {
        String returnString = "redirect:/bookView?isbn=" + isbn;
        return returnString;
    }




//     View for wikipedia

    @GetMapping("/wiki")
    public String showWiki(){
        return "/wikipedia";
    }



//    About Us view
    @GetMapping("/about-us")
    public String aboutUs(){
        return "/about-us";
    }

}

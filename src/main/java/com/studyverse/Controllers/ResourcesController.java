package com.studyverse.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ResourcesController {

    @GetMapping("/books")
    public String showBookPage(){
        return "/resources";
    }


    @GetMapping("/bookView/{isbn}")
    public String showBookView(Model model, @PathVariable int isbn){
        model.addAttribute("isbn", isbn);
        return "/bookView";
    }

}

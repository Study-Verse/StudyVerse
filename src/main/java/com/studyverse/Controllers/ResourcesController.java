package com.studyverse.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ResourcesController {

    @GetMapping("/books")
    public String showBookPage(){
        return "/resources";
    }

}

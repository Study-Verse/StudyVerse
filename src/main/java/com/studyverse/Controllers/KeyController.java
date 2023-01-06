package com.studyverse.Controllers;

import com.studyverse.Services.KeyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class KeyController {

    @Autowired
    private KeyService keys;

    @GetMapping("/keys")
    public KeyService getKeys(){
        return keys;
    }
}

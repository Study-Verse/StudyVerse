package com.studyverse.Controllers;

import com.studyverse.Models.Quiz;
import com.studyverse.Repositories.QuizRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class QuizController {

    private final QuizRepository quizDao;

   public QuizController(QuizRepository quizDao){
       this.quizDao = quizDao;
   }

//   api for getting all the quiz made
    @GetMapping("quiz-api/api")
    public @ResponseBody List<Quiz> quizList(){
        return quizDao.findAll();
    }





}

package com.studyverse.Controllers;

import com.studyverse.Models.Quiz;
import com.studyverse.Repositories.QuizRepository;
import com.studyverse.Services.Utils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class QuizController {

    private final QuizRepository quizDao;

   public QuizController(QuizRepository quizDao){
       this.quizDao = quizDao;
   }

//   api for getting all the quiz made
    @GetMapping("/quiz-api/api")
    public @ResponseBody List<Quiz> quizList(){
        return quizDao.findAll();
    }

    @GetMapping("/current-user-quiz-api")
    public @ResponseBody List<Quiz> currentUserQuizList(){
       List<Quiz> quizList = Utils.currentUser().getQuiz();
        return quizList;
    }



    //    ============ self test get mapping
    @GetMapping("/self-test")
    public String test(Model model){
       model.addAttribute("newQuiz", new Quiz());


        return "self-test";
    }

    @PostMapping("/newQuiz")
    public String addNewQuiz (@ModelAttribute Quiz quiz){
       quiz.setUser(Utils.currentUser());
       quizDao.save(quiz);
       return "redirect:/self-test";
    }


}

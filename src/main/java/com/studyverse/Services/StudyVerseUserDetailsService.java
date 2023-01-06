package com.studyverse.Services;

import com.studyverse.Models.User;
import com.studyverse.Repositories.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class StudyVerseUserDetailsService implements UserDetailsService {

    public final UserRepository userDao;

    public StudyVerseUserDetailsService(UserRepository userDao) {
        this.userDao = userDao;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userDao.findByUsername(username);
        if(user == null){
            throw new UsernameNotFoundException("User details not found for user " + username);
        }else {
            return new com.studyverse.Models.StudyVerseUserDetails(user.getId(),user.getUsername(),user.getEmail(),user.getPassword());
        }
    }


}

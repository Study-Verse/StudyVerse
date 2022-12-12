package com.studyverse.Services;

import com.studyverse.Models.StudyVerseUserDetails;
import com.studyverse.Models.User;
import com.studyverse.Repositories.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class SpringUserDetailService implements UserDetailsService {

    public final UserRepository userDao;

    public SpringUserDetailService(UserRepository userDao) {
        this.userDao = userDao;
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userDao.findByUsername(username);
        if(user == null){
            throw new UsernameNotFoundException("User details not found for user " + username);
        }else {
            return new StudyVerseUserDetails(user.getId(),user.getEmail(),user.getUsername(),user.getPassword());
        }
    }
}

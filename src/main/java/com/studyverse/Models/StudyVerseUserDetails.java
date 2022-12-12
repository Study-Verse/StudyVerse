package com.studyverse.Models;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
import org.springframework.security.core.userdetails.UserDetails;

public class StudyVerseUserDetails extends User implements UserDetails{

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public StudyVerseUserDetails() {
    }

    public StudyVerseUserDetails(long id, String email, String username, String password) {
        super(id, email, username, password);
    }
}

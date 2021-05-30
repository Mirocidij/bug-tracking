package com.github.mirocidij.bugtracking.repository;

import com.github.mirocidij.bugtracking.domain.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepo extends JpaRepository<User, Long> {

    User findByUsername(String username);

    @Query("select u from User u join fetch u.roles where u.username = :username")
    User findByUsernameWithJoinFetchRoles(String username);

}

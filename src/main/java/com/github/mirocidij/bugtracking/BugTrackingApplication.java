package com.github.mirocidij.bugtracking;

import com.github.mirocidij.bugtracking.repository.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@RequiredArgsConstructor
public class BugTrackingApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(BugTrackingApplication.class, args);
    }

    private final UserRepo userRepo;

    @Override
    public void run(String... args) throws Exception {
        var user = userRepo.findByUsernameWithJoinFetchRoles("redeyes");

        System.out.println(user);
    }

}

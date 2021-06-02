package com.github.mirocidij.bugtracking.domain.model.boards;

import com.github.mirocidij.bugtracking.domain.model.BaseEntity;
import com.github.mirocidij.bugtracking.domain.model.user.User;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "boards")
public class Board extends BaseEntity<Long> {

    private String boardTitle;

    private String boardDescription;

    private Integer backgroundColor;

    private String backgroundImageUrl;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "boards_users",
            joinColumns = { @JoinColumn(name = "board_id", referencedColumnName = "id") },
            inverseJoinColumns = { @JoinColumn(name = "user_id", referencedColumnName = "id") }
    )
    private List<User> users;

    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CardList> cardLists;

}

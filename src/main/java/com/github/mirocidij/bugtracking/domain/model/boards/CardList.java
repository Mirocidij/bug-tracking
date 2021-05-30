package com.github.mirocidij.bugtracking.domain.model.boards;

import com.github.mirocidij.bugtracking.domain.model.BaseEntity;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "card_lists")
public class CardList extends BaseEntity<Long> {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_id")
    private Board board;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer serialNumber;

}

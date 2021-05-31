package com.github.mirocidij.bugtracking.domain.model.boards;

import com.github.mirocidij.bugtracking.domain.model.BaseEntity;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "cards")
public class Card extends BaseEntity<Long> {

    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    private CardList cardList;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer serialNumber;

}

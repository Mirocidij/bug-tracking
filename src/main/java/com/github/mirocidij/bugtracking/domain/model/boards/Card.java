package com.github.mirocidij.bugtracking.domain.model.boards;

import com.github.mirocidij.bugtracking.domain.model.BaseEntity;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "cards")
public class Card extends BaseEntity<Long> {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "card_lists_id")
    private CardList cardList;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer serialNumber;

}

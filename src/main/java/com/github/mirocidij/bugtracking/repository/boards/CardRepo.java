package com.github.mirocidij.bugtracking.repository.boards;

import com.github.mirocidij.bugtracking.domain.model.boards.Card;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CardRepo extends JpaRepository<Card, Long> {

    List<Card> findAllByCardListIdOrderBySerialNumberDesc(Long cardListId);

}

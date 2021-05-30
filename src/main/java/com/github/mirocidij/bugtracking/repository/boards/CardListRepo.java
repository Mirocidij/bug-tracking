package com.github.mirocidij.bugtracking.repository.boards;

import com.github.mirocidij.bugtracking.domain.model.boards.CardList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CardListRepo extends JpaRepository<CardList, Long> {

    List<CardList> findAllByBoardIdOrderBySerialNumberDesc(Long boardId);

}

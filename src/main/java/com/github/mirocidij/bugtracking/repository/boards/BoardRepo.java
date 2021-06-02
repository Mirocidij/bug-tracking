package com.github.mirocidij.bugtracking.repository.boards;

import com.github.mirocidij.bugtracking.domain.model.boards.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface BoardRepo extends JpaRepository<Board, Long> {

    List<Board> findAllByUserId(Long userId);

    @Query("select b from Board b join fetch b.user where b.id = :id")
    Optional<Board> findWithJoinFetch(Long id);

    List<Board> findAllByUserUsernameOrderById(String username);

}

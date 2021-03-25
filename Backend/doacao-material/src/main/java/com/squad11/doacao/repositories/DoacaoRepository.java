package com.squad11.doacao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.squad11.doacao.entities.Doacao;
import com.squad11.doacao.entities.Doador;

@Repository
public interface DoacaoRepository extends JpaRepository<Doacao, Long> {

}

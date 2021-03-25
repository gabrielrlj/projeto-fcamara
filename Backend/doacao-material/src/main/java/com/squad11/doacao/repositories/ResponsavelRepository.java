package com.squad11.doacao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.squad11.doacao.entities.Responsavel;

@Repository
public interface ResponsavelRepository extends JpaRepository<Responsavel, Long>{

}

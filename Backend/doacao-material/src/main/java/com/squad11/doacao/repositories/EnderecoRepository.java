package com.squad11.doacao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.squad11.doacao.entities.Endereco;
import com.squad11.doacao.entities.Responsavel;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Long>{

}

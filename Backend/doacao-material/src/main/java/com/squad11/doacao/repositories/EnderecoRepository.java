package com.squad11.doacao.repositories;

import java.util.List;

import javax.persistence.NamedQuery;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.squad11.doacao.entities.Endereco;
import com.squad11.doacao.entities.Responsavel;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Long>{


	@Query(value = "SELECT cidade FROM endereco", 
			  nativeQuery = true)
	List<String> findAllCidades();
}

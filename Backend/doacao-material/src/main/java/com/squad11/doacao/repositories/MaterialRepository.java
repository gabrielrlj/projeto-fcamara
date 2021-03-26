package com.squad11.doacao.repositories;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.squad11.doacao.entities.Material;


@Repository
public interface MaterialRepository extends JpaRepository<Material, Long>{

	

}

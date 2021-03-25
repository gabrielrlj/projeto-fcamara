package com.squad11.doacao.services;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.squad11.doacao.entities.Dependente;
import com.squad11.doacao.entities.Material;
import com.squad11.doacao.repositories.MaterialRepository;



@Service
public class MaterialService {
	
	@Autowired
	private MaterialRepository materialRepository;
	
	public Material cadastraMaterial (Material material, Integer quantidade, String descricao, Dependente dependente) {
		material.setQuantidade(quantidade);
		material.setDependente(dependente);
		material.setDescricao(descricao);
		return materialRepository.save(material);
	
	
		 
	}


	}



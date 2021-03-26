package com.squad11.doacao.services;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.squad11.doacao.entities.Dependente;
import com.squad11.doacao.entities.Material;
import com.squad11.doacao.repositories.MaterialRepository;

@Service
public class MaterialService {
	@Autowired
	private DependenteService dependenteService;

	@Autowired
	private MaterialRepository materialRepository;

	public Material cadastraMaterial(Material material, Long dependente_id, Long responsavel_id) {

		Dependente dependente = dependenteService.retornaDependente(responsavel_id, dependente_id);
		dependente.getMateriais().add(material);
		material.setDependente(dependente);

		return materialRepository.save(material);

	}

}

package com.squad11.doacao.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.squad11.doacao.entities.Dependente;
import com.squad11.doacao.entities.Material;
import com.squad11.doacao.services.MaterialService;

@RestController
@RequestMapping("/dependentes")

public class MaterialController {
	
	
	@Autowired
	private MaterialService materialService;
	
	@PostMapping("/material")
	public Material cadastraMaterial (@PathVariable Long id, @RequestBody Material material, Dependente dependente, Integer quantidade, String descricao) {
		return materialService.cadastraMaterial(material, quantidade, descricao, dependente);
	}
		
	}
		
	
	

	
	



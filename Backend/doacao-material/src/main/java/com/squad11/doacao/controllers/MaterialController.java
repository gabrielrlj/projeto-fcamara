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

public class MaterialController {
	
	
	@Autowired
	private MaterialService materialService;
	
	@PostMapping("/responsaveis/{responsavel_id}/dependentes/{dependente_id}/materiais")
	public Material cadastraMaterial (@PathVariable Long responsavel_id, @PathVariable Long dependente_id,
	@RequestBody Material material){
		return materialService.cadastraMaterial(material, dependente_id, responsavel_id);
	}
	
	
		
	}
		
	
	

	
	



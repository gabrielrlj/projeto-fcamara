package com.squad11.doacao.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.squad11.doacao.entities.Dependente;
import com.squad11.doacao.services.DependenteService;
import com.squad11.doacao.services.ResponsavelService;

@RestController
public class DependenteController {

	@Autowired
	private DependenteService dependenteService;
	
	@Autowired
	private ResponsavelService responsavelService;

	@PostMapping("/responsaveis/{responsavel_id}/dependentes")
	public Dependente cadastraDependente(@PathVariable Long responsavel_id, @RequestBody @Valid Dependente dependente) {
		return dependenteService.cadastraDependente(responsavel_id, dependente);
	}
	
	@GetMapping("/responsaveis/{responsavel_id}/dependentes")
	public List<Dependente> retornaDependentesPorIdResponsavel(@PathVariable Long responsavel_id) {
		return responsavelService.retornaDependentes(responsavel_id);
	}
	
	@GetMapping("/responsaveis/{responsavel_id}/dependentes/{dependente_id}")
	public Dependente retornaDependentePorId(@PathVariable Long responsavel_id,
			@PathVariable Long dependente_id) {
		
		return dependenteService.retornaDependente(responsavel_id, dependente_id);
	}

}

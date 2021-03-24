package com.squad11.doacao.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.squad11.doacao.entities.Dependente;
import com.squad11.doacao.services.DependenteService;

@RestController
@RequestMapping("/responsaveis")
public class DependenteController {

	@Autowired
	private DependenteService dependenteService;

	@PostMapping("/{id}/dependentes")
	public Dependente cadastraDependente(@PathVariable Long id, @RequestBody Dependente dependente) {
		return dependenteService.cadastraDependente(id, dependente);
	}

}

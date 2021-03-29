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
import com.squad11.doacao.entities.Doador;
import com.squad11.doacao.services.DependenteService;
import com.squad11.doacao.services.DoadorService;


@RestController
@RequestMapping("/doadores")
public class DoadorController{
	
	@Autowired
	private DoadorService doadorService;
	
	@Autowired
	private DependenteService dependenteService;
	
	@PostMapping
	public Doador cadastraDoador(@RequestBody @Valid Doador doador) {
		return doadorService.cadastraDoador(doador);
	}
	
	@GetMapping("/dependentes")
	public List<Dependente> retornaDependentes(){
		return dependenteService.retornaTodosDependentes();
	}
	

}

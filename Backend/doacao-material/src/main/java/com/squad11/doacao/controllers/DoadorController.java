package com.squad11.doacao.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.squad11.doacao.entities.Doador;
import com.squad11.doacao.services.DoadorService;


@RestController
@RequestMapping("/doadores")
public class DoadorController{
	
	@Autowired
	private DoadorService doadorService;
	
	@PostMapping
	public Doador cadastraDoador(@RequestBody Doador doador) {
		return doadorService.cadastraDoador(doador);
	}
	
	

}

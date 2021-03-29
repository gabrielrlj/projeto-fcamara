package com.squad11.doacao.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.squad11.doacao.entities.Dependente;
import com.squad11.doacao.entities.Responsavel;
import com.squad11.doacao.entities.ResponsavelDTO;
import com.squad11.doacao.services.ResponsavelService;

@RestController
@RequestMapping("/responsaveis")
public class ResponsavelController{
	
	@Autowired
	private ResponsavelService responsavelService;
	
	@PostMapping
	public Responsavel cadastraResponsavel(@RequestBody Responsavel responsavel) {
		return responsavelService.cadastraResponsavel(responsavel);
	}
	
	@GetMapping("/{id}")
	public Responsavel retornaResponsavelPorId(@PathVariable Long id) {
		return responsavelService.retornaResponsavel(id);
	}
	
	@PostMapping("/login")
	public Responsavel login(@RequestBody ResponsavelDTO responsavelDTO) {
		
		return responsavelService.login(responsavelDTO.getEmail(), responsavelDTO.getSenha());
	}
	

}

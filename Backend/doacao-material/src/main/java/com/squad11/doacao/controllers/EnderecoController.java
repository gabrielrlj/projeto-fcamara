package com.squad11.doacao.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.squad11.doacao.entities.Endereco;
import com.squad11.doacao.entities.Responsavel;
import com.squad11.doacao.services.EnderecoService;
import com.squad11.doacao.services.ResponsavelService;

@RestController
@RequestMapping("/responsaveis")
public class EnderecoController{
	
	@Autowired
	private EnderecoService enderecoService;
	
	
	@PostMapping("/{id}/enderecos")
	public Endereco cadastraEndereco(@PathVariable Long id,  @RequestBody Endereco endereco) {
		
		return enderecoService.cadastraEndereco(id, endereco);
	}

}

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
import com.squad11.doacao.entities.Doacao;
import com.squad11.doacao.entities.Doador;
import com.squad11.doacao.services.DependenteService;
import com.squad11.doacao.services.DoacaoService;
import com.squad11.doacao.services.DoadorService;


@RestController
public class DoacaoController{
	
	@Autowired
	private DoacaoService doacaoService;

	@PostMapping("doadores/{doador_id}/dependentes/{dependente_id}/doacoes")
	public Doacao fazDoacao(@PathVariable Long doador_id, @PathVariable Long dependente_id, Doacao doacao) {
		
		return doacaoService.fazDoacao(doador_id, dependente_id, doacao);
	}
	

}

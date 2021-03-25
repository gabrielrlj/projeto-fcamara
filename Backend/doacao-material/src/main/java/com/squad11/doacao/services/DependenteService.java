package com.squad11.doacao.services;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.squad11.doacao.entities.Dependente;
import com.squad11.doacao.entities.Endereco;
import com.squad11.doacao.entities.Responsavel;
import com.squad11.doacao.repositories.DependenteRepository;
import com.squad11.doacao.repositories.EnderecoRepository;

@Service
public class DependenteService {

	@Autowired
	private DependenteRepository dependenteRepository;
	
	@Autowired
	private ResponsavelService responsavelService;
	

	public Dependente cadastraDependente(Long responsavel_id, Dependente dependente) {
		
		Responsavel responsavel = responsavelService.retornaResponsavel(responsavel_id);
		responsavel.getDependentes().add(dependente);
		dependente.setResponsavel(responsavel);
		
		return dependenteRepository.save(dependente);
	}

}

package com.squad11.doacao.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.squad11.doacao.entities.Endereco;
import com.squad11.doacao.entities.Responsavel;
import com.squad11.doacao.repositories.EnderecoRepository;
import com.squad11.doacao.repositories.ResponsavelRepository;

@Service
public class EnderecoService {

	@Autowired
	private EnderecoRepository enderecoRepository;

	@Autowired
	private ResponsavelService responsavelService;

	public Endereco cadastraEndereco(Long responsavel_id, Endereco endereco) {

		Responsavel responsavel = responsavelService.retornaResponsavel(responsavel_id);

		responsavel.setEndereco(endereco);
		endereco.setResponsavel(responsavel);
		return enderecoRepository.save(endereco);
	}

	public List<String> retornaCidadesCadastradas() {
		return enderecoRepository.findAllCidades();
	}

}

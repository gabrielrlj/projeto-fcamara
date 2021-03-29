package com.squad11.doacao.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.squad11.doacao.entities.Dependente;
import com.squad11.doacao.entities.Responsavel;
import com.squad11.doacao.repositories.ResponsavelRepository;

@Service
public class ResponsavelService{

	@Autowired
	private ResponsavelRepository responsavelRepository;
	
	
	public Responsavel cadastraResponsavel(Responsavel obj) {
		return responsavelRepository.save(obj);
	}
	
	public Responsavel retornaResponsavel(Long id) {
		return responsavelRepository.findById(id).get();
	}

	public List<Dependente> retornaDependentes(Long id) {
		Responsavel responsavel = responsavelRepository.findById(id).get();
		
		return responsavel.getDependentes();
	}
	
	public Responsavel login(String email, String senha) {
		
		Responsavel responsavel = responsavelRepository.findByEmail(email);
		if(responsavel == null) {
			return null;
		}
		if(responsavel.getSenha().equals(senha)) {
			return responsavel;
		}
		
		return null;
	}
	
}

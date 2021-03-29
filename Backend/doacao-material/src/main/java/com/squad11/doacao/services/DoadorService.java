package com.squad11.doacao.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.squad11.doacao.entities.Doador;
import com.squad11.doacao.entities.Responsavel;
import com.squad11.doacao.repositories.DoadorRepository;




@Service	
public class DoadorService {
	
	@Autowired
	private DoadorRepository doadorRepository;

	public Doador cadastraDoador(Doador doador) {
		doador.setPontos(0);
		return doadorRepository.save(doador);
	}

	public Doador retornaDoador(Long doador_id) {
		return doadorRepository.findById(doador_id).get();
	}

	public Doador login(String email, String senha) {
		
		Doador doador = doadorRepository.findByEmail(email);
		if(doador == null) {
			return null;
		}
		if(doador.getSenha().equals(senha)) {
			return doador;
		}
		
		return null;
	}

}

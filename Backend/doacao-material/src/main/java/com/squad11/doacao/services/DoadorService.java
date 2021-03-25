package com.squad11.doacao.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.squad11.doacao.entities.Doador;
import com.squad11.doacao.repositories.DoadorRepository;




@Service	
public class DoadorService {
	
	@Autowired
	private DoadorRepository doadorRepository;

	public Doador cadastraDoador(Doador doador) {
		doador.setPontos(0);
		return doadorRepository.save(doador);
	}


}

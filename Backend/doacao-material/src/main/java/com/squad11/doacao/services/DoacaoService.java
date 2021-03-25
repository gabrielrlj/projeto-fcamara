package com.squad11.doacao.services;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.squad11.doacao.entities.Dependente;
import com.squad11.doacao.entities.Doacao;
import com.squad11.doacao.entities.Doador;
import com.squad11.doacao.entities.EstadoDoacao;
import com.squad11.doacao.repositories.DoacaoRepository;


@Service	
public class DoacaoService {
	
	@Autowired
	private DoadorService doadorService;
	
	@Autowired
	private DependenteService dependenteService;
	
	@Autowired
	private DoacaoRepository doacaoRepository;

	public Doacao fazDoacao(Long doador_id, Long dependente_id, Doacao doacao) {
		
		Doador doador = doadorService.retornaDoador(doador_id);
		Dependente dependente = dependenteService.retornaDependentePorId(dependente_id);
		
		doacao = new Doacao(null, LocalDate.now(), dependente, doador,EstadoDoacao.AGUARDANDO);
		
		doador.getDoacoes().add(doacao);
		dependente.setDoacao(doacao);
	
		
		return doacaoRepository.save(doacao);
	}


}

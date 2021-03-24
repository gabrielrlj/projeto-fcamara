package com.squad11.doacao.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.squad11.doacao.entities.Responsavel;
import com.squad11.doacao.repositories.ResponsavelRepository;

@Service
public class ResponsavelService{

	@Autowired
	private ResponsavelRepository responsavelRepository;
	
	
}

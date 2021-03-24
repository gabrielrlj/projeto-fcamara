package com.squad11.doacao.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.squad11.doacao.entities.Responsavel;
import com.squad11.doacao.services.ResponsavelService;

@RestController
public class ResponsavelController{
	
	@Autowired
	private ResponsavelService responsavelService;
	

}

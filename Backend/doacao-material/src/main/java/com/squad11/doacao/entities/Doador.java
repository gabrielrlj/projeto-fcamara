package com.squad11.doacao.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Doador {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String email;
	private Integer pontos;
	
	public Doador() {
		
	}
	
	public Doador(Long id, String email, Integer pontos) {
		this.id = id;
		this.email = email;
		this.pontos = pontos;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Integer getPontos() {
		return pontos;
	}
	public void setPontos(Integer pontos) {
		this.pontos = pontos;
	}
	
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("E-mail: ");
		builder.append(email);
		builder.append("\n Sua pontuação: ");
		builder.append(pontos);
		return builder.toString();
	}
}

package com.squad11.doacao.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Material {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String descricao;
	private Integer quantidade;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "dependente_id", nullable = false)
	private Dependente dependente;

	public Material() {

	}

	public Material(Long id, String descricao, Integer quantidade, Dependente dependente) {
		this.id = id;
		this.descricao = descricao;
		this.quantidade = quantidade;
		this.dependente = dependente;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	public Dependente getDependente() {
		return dependente;
	}

	public void setDependente(Dependente dependente) {
		this.dependente = dependente;
	}

}

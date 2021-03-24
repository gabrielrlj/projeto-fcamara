package com.squad11.doacao.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Dependente implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "responsavel_id", nullable = false)
	@JsonBackReference
	private Responsavel responsavel;

	@OneToMany(mappedBy = "dependente", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Material> materiais = new ArrayList<Material>();

	@OneToOne(cascade = CascadeType.ALL)
	@JoinTable(name = "dependente_doacao", joinColumns = {
			@JoinColumn(name = "dependente_id", referencedColumnName = "id") }, inverseJoinColumns = {
					@JoinColumn(name = "doacao_id", referencedColumnName = "id") })
	private Doacao doacao;

	private String nome;
	private String escola;
	private Integer idade;
	private String serie;

	public Dependente(Long id, Responsavel responsavel, Doacao doacao, String nome, String escola, Integer idade,
			String serie) {
		super();
		this.id = id;
		this.responsavel = responsavel;
		this.doacao = doacao;
		this.nome = nome;
		this.escola = escola;
		this.idade = idade;
		this.serie = serie;
	}

	public Dependente() {

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Responsavel getResponsavel() {
		return responsavel;
	}

	public void setResponsavel(Responsavel responsavel) {
		this.responsavel = responsavel;
	}

	public List<Material> getMateriais() {
		return materiais;
	}

	public void setMateriais(List<Material> materiais) {
		this.materiais = materiais;
	}

	public Doacao getDoacao() {
		return doacao;
	}

	public void setDoacao(Doacao doacao) {
		this.doacao = doacao;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEscola() {
		return escola;
	}

	public void setEscola(String escola) {
		this.escola = escola;
	}

	public Integer getIdade() {
		return idade;
	}

	public void setIdade(Integer idade) {
		this.idade = idade;
	}

	public String getSerie() {
		return serie;
	}

	public void setSerie(String serie) {
		this.serie = serie;
	}

}

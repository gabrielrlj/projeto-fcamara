package com.squad11.doacao.entities;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Doacao implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private LocalDate dataDoacao;

	@OneToOne(mappedBy = "doacao")
	private Dependente dependente;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "doador_id", nullable = false)
	private Doador doador;

	private EstadoDoacao estado;

	public Doacao() {

	}

	public Doacao(Long id, LocalDate dataDoacao, Dependente dependente, Doador doador, EstadoDoacao estado) {
		super();
		this.id = id;
		this.dataDoacao = dataDoacao;
		this.dependente = dependente;
		this.doador = doador;
		this.estado = estado;
	}

	public LocalDate getDataDoacao() {
		return dataDoacao;
	}

	public void setDataDoacao(LocalDate dataDoacao) {
		this.dataDoacao = dataDoacao;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Dependente getDependente() {
		return dependente;
	}

	public void setDependente(Dependente dependente) {
		this.dependente = dependente;
	}

	public Doador getDoador() {
		return doador;
	}

	public void setDoador(Doador doador) {
		this.doador = doador;
	}

	public EstadoDoacao getEstado() {
		return estado;
	}

	public void setEstado(EstadoDoacao estado) {
		this.estado = estado;
	}

}

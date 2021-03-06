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
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Responsavel implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@OneToMany(mappedBy = "responsavel", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Dependente> dependentes = new ArrayList<Dependente>();

	@OneToOne(cascade = CascadeType.ALL)
	@JoinTable(name = "responsavel_endereco", joinColumns = {
			@JoinColumn(name = "responsavel_id", referencedColumnName = "id") }, inverseJoinColumns = {
					@JoinColumn(name = "endereco_id", referencedColumnName = "id") })
	private Endereco endereco;

	private String telefone;
	
	@NotBlank
	@Size(min = 11, max = 11)
	private String nis;
	
	@NotBlank
	@Email
	private String email;
	@NotBlank
	private String nome;
	@JsonIgnore
	private String senha;
	

	public Responsavel() {

	}


	public Responsavel(Long id, List<Dependente> dependentes, Endereco endereco, String telefone, String email,
			String nome, String senha, String nis) {
		super();
		this.id = id;
		this.dependentes = dependentes;
		this.endereco = endereco;
		this.telefone = telefone;
		this.email = email;
		this.nome = nome;
		this.senha = senha;
		this.nis = nis;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	@JsonIgnore
	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public List<Dependente> getDependentes() {
		return dependentes;
	}

	public void setDependentes(List<Dependente> dependentes) {
		this.dependentes = dependentes;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


	public String getNis() {
		return nis;
	}


	public void setNis(String nis) {
		this.nis = nis;
	}
	

}

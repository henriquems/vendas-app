package com.curso.vendasapi.model;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

@Entity
@Table(name="produto")
public class Produto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="sku")
	private String sku;
	
	@Column(name="descricao", length = 255)
	private String descricao;
	
	@Column(name="nome", length = 100)
	private String nome;
	
	@Column(name="preco", precision = 16, scale = 2)
	private BigDecimal preco;
	
	@Column(name = "data_cadastro")
	private LocalDate dataCadastro;

	public Produto() {
		super();
	}

	public Produto(String sku, String descricao, String nome, BigDecimal preco) {
		super();
		this.sku = sku;
		this.descricao = descricao;
		this.nome = nome;
		this.preco = preco;
	}

	public Produto(Long id, String sku, String descricao, String nome, BigDecimal preco) {
		super();
		this.id = id;
		this.sku = sku;
		this.descricao = descricao;
		this.nome = nome;
		this.preco = preco;
	}
	
	@PrePersist
	public void prePersit() {
		setDataCadastro(LocalDate.now());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public BigDecimal getPreco() {
		return preco;
	}

	public void setPreco(BigDecimal preco) {
		this.preco = preco;
	}

	public LocalDate getDataCadastro() {
		return dataCadastro;
	}

	public void setDataCadastro(LocalDate dataCadastro) {
		this.dataCadastro = dataCadastro;
	}

	@Override
	public String toString() {
		return "Produto [id=" + id + ", sku=" + sku + ", descricao=" + descricao + ", nome=" + nome + ", preco=" + preco
				+ "]";
	}

}

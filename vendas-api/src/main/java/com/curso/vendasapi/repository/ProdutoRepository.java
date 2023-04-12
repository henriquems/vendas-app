package com.curso.vendasapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.curso.vendasapi.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {

}

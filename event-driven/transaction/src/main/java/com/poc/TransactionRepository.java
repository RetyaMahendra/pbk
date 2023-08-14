package com.poc;

import org.springframework.data.jpa.repository.JpaRepository;

import com.poc.model.TransactionLog;

public interface TransactionRepository extends JpaRepository<TransactionLog, String> {

}

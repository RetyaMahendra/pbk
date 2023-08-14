package com.poc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.poc.model.Individu;

@RestController
@RequestMapping("/individu")
public class IndividuController {

	@Autowired
	IndividuRepository repository;

	@PostMapping("/add")
	public Individu add(@RequestBody Individu individu) {
		return repository.save(individu);
	}

}

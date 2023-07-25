package com.iamneo.security.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Task;

import com.iamneo.security.service.Task_serv;


import lombok.RequiredArgsConstructor;

@CrossOrigin(origins="*")
@RequiredArgsConstructor
@RestController
public class TaskController {

	private final Task_serv serv;
	
	@PostMapping("/TaskAddDetails")
	public Task addInfo(@RequestBody Task st)
	{
		return serv.saveDetails(st);
	}

	@GetMapping("/TaskShowDetails")
	public List<Task> fetchDetails()
	{
		return serv.getDetails();
	}

	@PutMapping("/TaskUpdateDetails")
	public ResponseEntity<Task> updateInfo(@RequestBody Task st1)
	{
		Task updatedEmp = serv.updateDetails(st1);
		return ResponseEntity.ok(updatedEmp);
	}
	
}
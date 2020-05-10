package com.meanpixel.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.meanpixel.spring.entity.Todos;
import com.meanpixel.spring.service.TodoService;

@RestController
@RequestMapping("/api")
public class TodoRestController {
	
	private TodoService todoService;
	
	@GetMapping("/todos")
	public List<Todos> getTodos() {
		
		List<Todos> allTodos = todoService.getTodos();
		
		return allTodos;
	}
	
	
	@Autowired
	public void setTodoService(TodoService todoService) {
		this.todoService = todoService;
	}

}

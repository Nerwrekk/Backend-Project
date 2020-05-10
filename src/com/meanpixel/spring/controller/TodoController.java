package com.meanpixel.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.meanpixel.spring.entity.Todos;
import com.meanpixel.spring.service.TodoService;

@Controller
@RequestMapping("/todo")
public class TodoController {
	
	private TodoService todoService;
	
	@GetMapping("/main")
	public String showMain(Model model) {
		
		//get todos from the service
		List<Todos> allTodos = todoService.getTodos();
		
		//add the todos to the model
		model.addAttribute("allTodos", allTodos);
		
		return "main";
	}
	
	
	@Autowired
	public void setTodoService(TodoService todoService) {
		this.todoService = todoService;
	}
	
}

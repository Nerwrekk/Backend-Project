package com.meanpixel.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.meanpixel.spring.dao.TodoDAO;
import com.meanpixel.spring.entity.Todos;

@Controller
public class TodoController {
	
	private TodoDAO todoDAO;
	
	@RequestMapping("/")
	public String showMain(Model model) {
		
		//get todos from the dao
		List<Todos> allTodos = todoDAO.getTodos();
		
		//add the todos to the model
		model.addAttribute("allTodos", allTodos);
		
		return "main";
	}
	
	
	@Autowired
	public void setTodoDAO(TodoDAO todoDAO) {
		this.todoDAO = todoDAO;
	}
}

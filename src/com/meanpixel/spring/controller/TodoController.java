package com.meanpixel.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
		
		//prepare if the user adds more todos
		Todos newTodos = new Todos();
		
		model.addAttribute("newTodos", newTodos);
		
		return "main";
	}
	
	@PostMapping("/addTodo")
	public String addNewTodo(@ModelAttribute("newTodos") Todos todos) {
		
		if (todos.getTodo().trim().equals("")) {
			return "redirect:/todo/main";
		}
		else {
			todoService.addTodos(todos);
			
			return "redirect:/todo/main";
		}
	}
	
	@PostMapping("/updateTodoStatus")
	public String updateTodo(@ModelAttribute("newTodos") Todos todos, @RequestParam("todoId") int id) {
		
		
		System.out.println("Id: " + id);
		
		//get the todo we are working on in the database
		Todos todo = todoService.getTodo(id);
		
		//change the todo to our new edited value
		todo.setTodo(todos.getTodo());


		System.out.println("todo message: " + todo.getTodo());
		System.out.println("todo id: " + todo.getId());
		
		
		if (todos.getTodo().trim().equals("")) {
			return "redirect:/todo/main";
		}
		else {
			todoService.addTodos(todo);
			
			return "redirect:/todo/main";
		}
		
	}
	
	@PostMapping("/deleteTodo")
	public String deleteSelectedTodo(@RequestParam("todoId") int id) {
		
		Todos todos = todoService.getTodo(id);
		
		System.out.println("Todo id: " + todos.getId());
		System.out.println("Todo message: " + todos.getTodo());
		
		todoService.deleteTodo(todos);
		
		return "redirect:/todo/main";
	}
	
	@PostMapping("/toggleCompleteStatus")
	public String toggleCompletedStatus(@RequestParam("todoId") int id) {
		
		Todos todos = todoService.getTodo(id);
		
		boolean toggleComplete = todos.getIsCompleted()? false : true;
		System.out.println("toggleComplete: " + toggleComplete);
		
		todos.setIsCompleted(toggleComplete);
		
		//add todos will check if the todo already exists and then just update it
		todoService.addTodos(todos);
		
		return "redirect:/todo/main";
	}
	
	@Autowired
	public void setTodoService(TodoService todoService) {
		this.todoService = todoService;
	}
	
}

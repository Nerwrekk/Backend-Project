package com.meanpixel.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.meanpixel.spring.dao.TodoDAO;
import com.meanpixel.spring.entity.Todos;

@Service
public class TodoServiceImplement implements TodoService {
	
	//We need to inject our todoDAO
	private TodoDAO todoDAO;
	
	@Override
	@Transactional
	public List<Todos> getTodos() {
		return todoDAO.getTodos();
	}
	
	
	@Autowired
	public void setTodoDAO(TodoDAO todoDAO) {
		this.todoDAO = todoDAO;
	}


	@Override
	@Transactional
	public void addTodos(Todos todos) {
		todoDAO.addTodos(todos);
	}


	@Override
	@Transactional
	public Todos getTodo(int theId) {
		return todoDAO.getTodo(theId);
	}


	@Override
	@Transactional
	public void deleteTodo(Todos todos) {
		todoDAO.deleteTodo(todos);
	}

}

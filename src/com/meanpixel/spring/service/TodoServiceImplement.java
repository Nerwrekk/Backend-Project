package com.meanpixel.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.meanpixel.spring.dao.TodoDAO;
import com.meanpixel.spring.entity.Todos;

@Service
public class TodoServiceImplement implements TodoService {
	
	//We need to inject our todoDAO
	private TodoDAO todoDAO;
	
	@Override
	public List<Todos> getTodos() {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	@Autowired
	public void setTodoDAO(TodoDAO todoDAO) {
		this.todoDAO = todoDAO;
	}

}

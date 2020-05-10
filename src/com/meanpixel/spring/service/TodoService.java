package com.meanpixel.spring.service;

import java.util.List;

import com.meanpixel.spring.entity.Todos;

public interface TodoService {
	List<Todos> getTodos();

	void addTodos(Todos todos);
	
	Todos getTodo(int theId);
}

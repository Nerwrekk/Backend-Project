package com.meanpixel.spring.dao;

import java.util.List;
import com.meanpixel.spring.entity.Todos;

public interface TodoDAO {
	
	public List<Todos> getTodos();

	public void addTodos(Todos todos);

	public Todos getTodo(int theId);

	public void deleteTodo(Todos todos);
}

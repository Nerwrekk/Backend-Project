package com.meanpixel.spring.dao;

import java.util.List;
import com.meanpixel.spring.entity.Todos;

public interface TodoDAO {
	
	public List<Todos> getTodos();
}

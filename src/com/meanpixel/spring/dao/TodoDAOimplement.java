package com.meanpixel.spring.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.meanpixel.spring.entity.Todos;

/**
 * @author alexander 
 *
 *@apiNote
 *works as the 'dao'(data access object) to comunicate with our database
 */
@Repository
public class TodoDAOimplement implements TodoDAO {
	
	//we need to inject the session factory
	private SessionFactory sessionFactory;
	
	@Override
	public List<Todos> getTodos() {
		
		//get the current hibernate session
		Session session = sessionFactory.getCurrentSession();
		
		//create a query
		Query<Todos> theQuery = session.createQuery("From Todos", Todos.class);
		
		//execute query and get result list
		List<Todos> todosList = theQuery.getResultList();
		
		//return the results
		return todosList;
	}

	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public void addTodos(Todos todos) {
		
		//get current hibernate session
		Session session = sessionFactory.getCurrentSession();
		
		//add out new todo to our database
		session.saveOrUpdate(todos);
		
	}

	@Override
	public Todos getTodo(int theId) {
		
		//get current hibernate session
		Session session = sessionFactory.getCurrentSession();
		
		//retrive data from the database
		Todos todos = session.get(Todos.class, theId);
		
		return todos;
	}

	@Override
	public void deleteTodo(Todos todos) {
		
		//get current hibernate session
		Session session = sessionFactory.getCurrentSession();
		
		//delete the todo
		session.remove(todos);
		
	}

}

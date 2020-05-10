<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>todo</title>
        <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/css-todo.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/custom-checkbox.css">
    </head>
    <body>
        <section class="todo">
            <header class="header">
                <h1>todo</h1>
                <form:form action="addTodo" modelAttribute="newTodos" method="POST">
                	<form:input path="todo" class="new-todo" placeholder="What do I need to do?"/>
                </form:form>
            </header>
            <section class="main">
                <div id="complete-all-button">
                    <input class="complete-all" id="complete-all" type="checkbox" onclick="makeAllTodosCompleted()">
                    <label for="complete-all" class="rotate hidden"></label>
                </div>
                <ul class="todo-list">
                	<li>
                	<!-- This is for the javascript to make a todo template -->
	                    <div class="view">
	                        <label class="todo-label" ondblclick="editText(this)"></label>
	                        <button class="destroy" id="destroy" onclick="destroyTodo(this)"></button>
	                    </div>
	                    <label class="checkbox-label">
	                        <input type="checkbox" id="toggle-complete" class="toggle-complete" onclick="completedTodo(this)">
	                        <span class="checkbox-custom"></span>
	                    </label>
	                    <input class="edit" value="">
                   </li>    
                   <!--todo template ends here -->
                   <!-- getting todos from our database -->
                    <c:forEach var="tempTodo" items="${allTodos}">
	                    <c:choose>
	                    <c:when test="${tempTodo.isCompleted == true}">
	                    	<li class="completed">
			                    <div class="view">
	                            	<label class="todo-label" ondblclick="editText(this)">${tempTodo.todo}</label>
	                            	<form:form action="deleteTodo" method="POST">
		                            		<button class="destroy" id="destroy" type="submit"></button>
		                            	<input type="hidden" name="todoId" value="${tempTodo.id}">  
	                            	</form:form>     
	                       	 	</div>
			                        <label class="checkbox-label">
			                            <input checked type="checkbox" id="toggle-complete" class="toggle-complete" onclick="completedTodo(this)">
			                            <span class="checkbox-custom"></span>
			                        </label>
		                        <form:form action="updateTodoStatus" modelAttribute="newTodos" method="POST">
		                        	<form:input path="todo" class="edit" name="edit" value="${tempTodo.todo}"/>
		                        	<input type="hidden" name="todoId" value="${tempTodo.id}">
	                        	</form:form>
		                    </li>  
	                    </c:when> 
	                    <c:otherwise>
	                    	<li>
			                    <div class="view">
	                            	<label class="todo-label" ondblclick="editText(this)">${tempTodo.todo}</label>
		                            	<form:form action="deleteTodo" method="POST">
		                            		<button class="destroy" id="destroy" type="submit"></button>
		                            	<input type="hidden" name="todoId" value="${tempTodo.id}">  
	                            	</form:form>  
	                       	 	</div>
			                        <label class="checkbox-label">
				                            <input type="checkbox" id="toggle-complete" class="toggle-complete" onclick="completedTodo(this)">
			                            <span class="checkbox-custom"></span>
			                        </label>
	                        	<form:form action="updateTodoStatus" modelAttribute="newTodos" method="POST">
		                        	<form:input path="todo" class="edit" name="edit" value="${tempTodo.todo}"/>
		                        	<input type="hidden" name="todoId" value="${tempTodo.id}">
	                        	</form:form>
                   		 	</li>  
	                    </c:otherwise>             
                    </c:choose>  
                    </c:forEach>
                </ul>
            </section>
            <c:choose>
            	<c:when test="${allTodos.size() == 0}">
		            <footer class="footer hidden">
		                <span class="todo-count">
		                    <strong></strong> items left
		                </span>
		                <ul class="options">
		                    <li>
		                        <a href="#/all"  class="a-all" onclick="showAllTodos(this)">All</a>
		                    </li>
		                    <li>
		                        <a href="#/active" class="a-active" onclick="showActiveTodos(this)">Active</a>
		                    </li>
		                    <li>
		                        <a href="#/completed" class="a-completed" onclick="showCompletedTodos(this)">Completed</a>
		                    </li>
		                </ul>
		                <button class="clear-completed hidden" onclick="clearAllCompletedTodos()">Clear completed</button>
		            </footer>
		        </c:when>
		            <c:otherwise>
		            	<footer class="footer">
		                <span class="todo-count">
		                    <strong></strong> items left
		                </span>
		                <ul class="options">
		                    <li>
		                        <a href="#/all"  class="a-all" onclick="showAllTodos(this)">All</a>
		                    </li>
		                    <li>
		                        <a href="#/active" class="a-active" onclick="showActiveTodos(this)">Active</a>
		                    </li>
		                    <li>
		                        <a href="#/completed" class="a-completed" onclick="showCompletedTodos(this)">Completed</a>
		                    </li>
		                </ul>
		                <button class="clear-completed" onclick="clearAllCompletedTodos()">Clear completed</button>
		            </footer>
		            </c:otherwise>
            </c:choose>
        </section>
        <footer class="made-by">
            <p>made by Alexander Tanaskovic</p>
            <p>double click to edit a todo</p>
        </footer>
        <script src="${pageContext.request.contextPath}/resources/js/addTodo.js"></script>
        <script src="${pageContext.request.contextPath}/resources/js/trackTodos.js"></script>
        <script src="${pageContext.request.contextPath}/resources/js/removeTodo.js"></script>
        <script src="${pageContext.request.contextPath}/resources/js/completedTodo.js"></script>
        <script src="${pageContext.request.contextPath}/resources/js/editFunction.js"></script>
        <script src="${pageContext.request.contextPath}/resources/js/optionFunctions.js"></script>
    </body>
</html>
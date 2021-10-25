package com.weebly.hectorjorozco.todolist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.weebly.hectorjorozco.todolist.model.Task;
import com.weebly.hectorjorozco.todolist.repository.TaskRepository;

// Front End React application location
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class TaskController {
	@Autowired
	private TaskRepository taskRepository;

	// Add task (CREATE)
	@PostMapping("/add-task")
	public Task addTask(@RequestBody Task task) {
		return taskRepository.save(task);
	}

	// Get all tasks (READ)
	@GetMapping("/get-tasks")
	public List<Task> getTasks() {
		return taskRepository.findAll();
	}

	// Update task (UPDATE)
	@PutMapping("/update-task")
	public ResponseEntity<Task> updateTask(@RequestBody Task task) {
		Task updatedTask = taskRepository.save(task);
		return ResponseEntity.ok(updatedTask);
	}

	// Delete task (DELETE)
	@DeleteMapping("/delete-task/{id}")
	public String deleteTask(@PathVariable long id) {
		taskRepository.deleteById(id);
		return "The task with id: " + id + " was removed from the database.";
	}

}

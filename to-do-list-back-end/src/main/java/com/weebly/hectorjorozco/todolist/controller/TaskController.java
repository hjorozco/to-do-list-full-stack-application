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

import com.weebly.hectorjorozco.todolist.exception.ResourceNotFoundException;
import com.weebly.hectorjorozco.todolist.model.Task;
import com.weebly.hectorjorozco.todolist.repository.TaskRepository;

// All CRUD operations are defined on this controller. 

// Front End React application location
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class TaskController {
	@Autowired
	private TaskRepository taskRepository;

	// Add task (CREATE)
	@PostMapping("/addtask")
	public Task newTask(@RequestBody Task task) {
		return taskRepository.save(task);
	}

	// Get all tasks (READ)
	@GetMapping("/alltasks")
	public List<Task> getAllTasks() {
		return taskRepository.findAll();
	}

	// Get task by id (READ)
	@GetMapping("/task/{id}")
	public ResponseEntity<Task> getTaskById(@PathVariable long id) {
		Task task = taskRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Task not found"));
		return ResponseEntity.ok(task);
	}

//	@GetMapping("/students/{name}")
//	public List<Task> getStudentByName(@PathVariable String name) {
//		// return studentRepo.findByName(name);
//
//		List<Task> students = taskRepository.findByName(name);
//		if (students.isEmpty()) {
//			System.out.println(new ResourceNotFoundException("Student(s) with the name " + name + " not found"));
//		}
//
//		return taskRepository.findByName(name);
//	}

	// Update task by id (UPDATE)
	@PutMapping("/task/{id}")
	public ResponseEntity<Task> updateTask(@PathVariable long id, @RequestBody Task task) {
		Task tempTask = taskRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Task not found"));
		tempTask.setDescription(task.getDescription());
		tempTask.setCompleted(task.getCompleted());
		Task updatedTask = taskRepository.save(tempTask);
		return ResponseEntity.ok(updatedTask);
	}

	// Delete task by id (DELETE)
	@DeleteMapping("/task/{id}")
	public String deleteTask(@PathVariable long id) {
		taskRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Task not found"));
		taskRepository.deleteById(id);
		return "The task with id: " + id + " was removed from the database.";
	}

}

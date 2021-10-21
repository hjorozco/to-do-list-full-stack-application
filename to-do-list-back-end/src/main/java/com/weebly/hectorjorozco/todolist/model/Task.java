package com.weebly.hectorjorozco.todolist.model;

import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "task")
public class Task {
	@Id
	// @GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String description;
	private byte completed;

	public Task() {
	}

	public Task(long id, String description, byte completed) {
		super();
		this.id = id;
		this.description = description;
		this.completed = completed;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public byte getCompleted() {
		return completed;
	}

	public void setCompleted(byte completed) {
		this.completed = completed;
	}

}

package com.weebly.hectorjorozco.todolist.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "task")
public class Task {
	@Id
	private long id;
	private String title;
	private String details;
	private byte completed;

	public Task() {
	}

	public Task(long id, String title, String details, byte completed) {
		super();
		this.id = id;
		this.title = title;
		this.details = details;
		this.completed = completed;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public byte getCompleted() {
		return completed;
	}

	public void setCompleted(byte completed) {
		this.completed = completed;
	}

}

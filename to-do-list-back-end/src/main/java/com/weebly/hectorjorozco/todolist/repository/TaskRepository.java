package com.weebly.hectorjorozco.todolist.repository;

// import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.weebly.hectorjorozco.todolist.model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

//	 List<Task> findByName(String name);
}

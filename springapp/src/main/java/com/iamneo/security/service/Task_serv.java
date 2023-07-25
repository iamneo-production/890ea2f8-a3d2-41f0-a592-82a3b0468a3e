package com.iamneo.security.service;


import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.iamneo.security.entity.Task;
import com.iamneo.security.entity.courses;
import com.iamneo.security.repository.courses_repo;
@Service
public class Task_serv 

{
	@Autowired
	courses_repo repo;
	
	public Task saveDetails(Task e)
	{
		return repo.save(e);
	}
	
	public List<Task> getDetails()
	{
		return repo.findAll();
	}
	public List<Task> getSorted(String field) {
		return repo.findAll(Sort.by(Sort.Direction.ASC,field));
	}
	public List<Task> getWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
		Page<Task> page =repo.findAll(PageRequest.of(offset, pageSize));
		return page.getContent();
	}
	public Task updateDetails(Task e1)
	{
		return repo.saveAndFlush(e1);
	}
	public void deleteDetails(Long id) 
	{
		repo.deleteById(id);
	}
    public Stream<Order> getEmployeeById(Long id)
    {
        return repo.findById(id).get();
    }
	
}
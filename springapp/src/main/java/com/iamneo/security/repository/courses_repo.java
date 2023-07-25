
package com.iamneo.security.repository;


import org.springframework.data.domain.Sort.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.Task;
import com.iamneo.security.entity.courses;
@Repository
public interface courses_repo extends JpaRepository<Task,Integer>{

	void deleteById(Long id);

	Streamable<Order> findById(Long id);

}
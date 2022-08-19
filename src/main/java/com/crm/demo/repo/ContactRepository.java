package com.crm.demo.repo;

import com.crm.demo.model.Contact;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;


@RepositoryRestResource
public interface ContactRepository extends CrudRepository<Contact, Long> {

}

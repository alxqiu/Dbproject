package main.java.users;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository
        extends CrudRepository<User, Integer> {

}

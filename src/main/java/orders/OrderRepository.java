package main.java.orders;

import org.springframework.data.repository.CrudRepository;

public interface OrderRepository
        extends CrudRepository<Order, Integer> {
}

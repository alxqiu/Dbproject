package main.java.product_orders;

import org.springframework.data.repository.CrudRepository;

public interface ProductOrderRepository
        extends CrudRepository<ProductOrder, Integer> {
}

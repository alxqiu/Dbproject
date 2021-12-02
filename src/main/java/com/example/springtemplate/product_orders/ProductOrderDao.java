package com.example.springtemplate.product_orders;

import com.example.springtemplate.orders.Order;
import com.example.springtemplate.orders.OrderRepository;
import com.example.springtemplate.users.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProductOrderDao {
  @Autowired
  OrderRepository orderRepository;
  @Autowired
  ProductOrderRepository productOrderRepository;

  @GetMapping("orm/product_orders/{id}")
  public ProductOrder findProductOrderById(
          @PathVariable("id") Integer id) {
    return productOrderRepository.findById(id).get();
  }

  @GetMapping("/orm/order/{orderId}/product_orders")
  public List<ProductOrder> findProductOrdersByOrder(
          @PathVariable("orderId") Integer userId) {
    return orderRepository.findById(userId).get().getProductOrders();
  }
}

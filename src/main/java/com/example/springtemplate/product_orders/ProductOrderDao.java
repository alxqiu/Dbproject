package com.example.springtemplate.product_orders;

import com.example.springtemplate.orders.Order;
import com.example.springtemplate.orders.OrderRepository;
import com.example.springtemplate.products.Product;
import com.example.springtemplate.products.ProductRepository;
import com.example.springtemplate.users.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProductOrderDao {
  @Autowired
  OrderRepository orderRepository;
  @Autowired
  ProductRepository productRepository;
  @Autowired
  ProductOrderRepository productOrderRepository;

  @GetMapping("/orm/product_orders/create/{qu}/{oId}/{pId}")
  public ProductOrder createProductOrder(
          @PathVariable("qu") Integer quantity,
          @PathVariable("oId") Integer orderId,
          @PathVariable("pId") Integer productId) {
    ProductOrder productOrder = new ProductOrder(quantity, orderId, productId);

    // Adding newly created product order to order's list
    Order order = orderRepository.findById(orderId).get();
    productOrder.setContainedIn(order);
    List<ProductOrder> productOrders = order.getProductOrders();
    productOrders.add(productOrder);
    order.setProductOrders(productOrders);
    orderRepository.save(order);

    // Adding newly created product order to product's list
    Product product = productRepository.findById(productId).get();
    productOrder.setProductType(product);
    productOrders = product.getProductOrders();
    productOrders.add(productOrder);
    product.setProductOrders(productOrders);
    productRepository.save(product);

    return productOrderRepository.save(productOrder);
  }

  @GetMapping("/orm/product_orders/find")
  public List<ProductOrder> findAllProductOrders() {
    return (List<ProductOrder>) productOrderRepository.findAll();
  }

  @GetMapping("orm/product_orders/find/id/{id}")
  public ProductOrder findProductOrderById(
          @PathVariable("id") Integer id) {
    return productOrderRepository.findById(id).get();
  }

  @GetMapping("/orm/orders/{orderId}/product_orders")
  public List<ProductOrder> findProductOrdersByOrder(
          @PathVariable("orderId") Integer orderId) {
    return orderRepository.findById(orderId).get().getProductOrders();
  }

  @GetMapping("/orm/products/{productId}/product_orders")
  public List<ProductOrder> findProductOrdersByProduct(
          @PathVariable("productId") Integer productId) {
    return productRepository.findById(productId).get().getProductOrders();
  }

  @GetMapping("/orm/product_orders/delete/{product_orderId}")
  public void deleteProductOrder(
          @PathVariable("product_orderId") Integer id) {
    productOrderRepository.deleteById(id);
  }

  @GetMapping("/orm/product_orders/update/{product_orderId}/{quantity}")
  public ProductOrder updateProductOrder(
          @PathVariable("product_orderId") Integer id,
          @PathVariable("password") Integer quantity) {
    ProductOrder productOrder = productOrderRepository.findById(id).get();
    productOrder.setQuantity(quantity);
    return productOrderRepository.save(productOrder);
  }
}

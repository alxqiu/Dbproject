package com.example.springtemplate.product_orders;

import com.example.springtemplate.orders.Order;
import com.example.springtemplate.products.Product;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "product_orders")
public class ProductOrder {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private Integer quantity;
  private Integer orderId;
  private Integer productId;

  @OneToMany(mappedBy = "productId")
  @JsonIgnore
  private List<ProductOrder> productOrders;


  @ManyToOne
  private Order containedIn;

  @ManyToOne
  private Product productType;

  public Product getProductType() { return productType; }

  public void setProductType(Product productType) { this.productType = productType; }

  public Order getContainedIn() { return containedIn; }

  public void setContainedIn(Order containedIn) { this.containedIn = containedIn; }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getQuantity() {
    return quantity;
  }

  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }

  public Integer getProductId() { return productId; }

  public void setProductId(Integer productId) { this.productId = productId; }

  public Integer getOrderId() { return orderId; }

  public void setOrderId(Integer orderId) { this.orderId = orderId; }

  public ProductOrder(Integer quantity, Integer orderId, Integer productId) {
    this.quantity = quantity;
    this.orderId = orderId;
    this.productId = productId;
  }

  public ProductOrder() {}
}

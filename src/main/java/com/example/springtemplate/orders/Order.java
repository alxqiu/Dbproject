package com.example.springtemplate.orders;

import com.example.springtemplate.users.User;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private Integer customerId;

  @ManyToOne
  private User orderedBy;

  public User getOrderedBy() { return orderedBy; }

  public void setOrderedBy(User orderedBy) { this.orderedBy = orderedBy; }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getCustomerId() {
    return customerId;
  }

  public void setCustomerId(Integer customerId) {
    this.customerId = customerId;
  }

  public Order(Integer id, Integer customerId) {
    this.id = id;
    this.customerId = customerId;
  }

  public Order() {}
}

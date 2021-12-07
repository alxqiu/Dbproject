package com.example.springtemplate.orders;

import com.example.springtemplate.product_orders.ProductOrder;
import com.example.springtemplate.users.User;
import com.example.springtemplate.users.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class OrderDao {
    @Autowired
    UserRepository userRepository;
    @Autowired
    OrderRepository orderRepository;

    @PostMapping("/orm/orders/create")
    public Order createOrder(@RequestBody Order order) {
        userRepository.findById(order.getCustomerId()).get().getOrders().add(order);
        return orderRepository.save(order);
    }

///*
//
//    // Adding newly created order to user's list
//    User user = userRepository.findById(orderId).get();
//    order.setOrderedBy(user);
//    List<Order> orders = user.getOrders();
//    orders.add(order);
//    user.setOrders(orders);
//    userRepository.save(user);
//
//    return orderRepository.save(order);
//*/


    @GetMapping("/orm/orders/find")
    public List<Order> findAllOrders() {
        return (List<Order>) orderRepository.findAll();
    }

    @GetMapping("orm/orders/find/{orderId}")
    public Order findOrderById(
            @PathVariable("orderId") Integer orderId) {
        return orderRepository.findById(orderId).get();
    }

//  @GetMapping("/orm/orders/find/{customerId}")
//  public List<Order> findOrdersByUser(
//          @PathVariable("userId") Integer userId) {
//    return userRepository.findById(userId).get().getOrders();
//  }

    @DeleteMapping("/orm/orders/delete/{orderId}")
    public void deleteOrder(
            @PathVariable("orderId") Integer id) {
        orderRepository.deleteById(id);
    }

    @PutMapping("/orm/orders/{orderId}")
    public Order updateOrder(
            @PathVariable("orderId") Integer id,
            @RequestBody Order orderUpdates) {
        Order order = orderRepository.findById(id).get();
        order.setCustomerId(orderUpdates.getCustomerId());
        return orderRepository.save(order);
    }
}


/*
http://localhost:8080/api/users/1/tweets
[
  {
    "tweetId": 1,
    "tweet": "Alice 1st Tweet",
    "tweetedOn": "2021-11-28T13:01:30.000+00:00"
  },
  {
    "tweetId": 3,
    "tweet": "Alice 2nd Tweet",
    "tweetedOn": "2021-11-28T13:01:30.000+00:00"
  }
]
 */

/*
http://localhost:8080/api/users/2/tweets
[
  {
    "tweetId": 2,
    "tweet": "Bob 1st Tweet",
    "tweetedOn": "2021-11-28T13:01:30.000+00:00"
  }
]
 */

/*
http://localhost:8080/api/users/3/tweets
[
  {
    "tweetId": 4,
    "tweet": "Charlie 1st Tweet",
    "tweetedOn": "2021-11-28T13:01:30.000+00:00"
  },
  {
    "tweetId": 5,
    "tweet": "Charlie 2nd Tweet",
    "tweetedOn": "2021-11-28T13:01:30.000+00:00"
  },
  {
    "tweetId": 6,
    "tweet": "Charlie 3rd Tweet",
    "tweetedOn": "2021-11-28T13:01:30.000+00:00"
  }
]
 */
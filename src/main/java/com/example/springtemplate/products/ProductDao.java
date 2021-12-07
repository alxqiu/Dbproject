package com.example.springtemplate.products;


import com.example.springtemplate.orders.Order;
import com.example.springtemplate.products.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProductDao {
    @Autowired
    ProductRepository productRepository;

    @PostMapping("/orm/products/create")
    public Product createOrder(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @GetMapping("/orm/products/find")
    public List<Product> findAllProducts() {
        return (List<Product>) productRepository.findAll();
    }

    @GetMapping("orm/products/find/{productId}")
    public Product findProductById(
            @PathVariable("productId") Integer productId) {
        return productRepository.findById(productId).get();
    }


    @DeleteMapping("/orm/products/delete/{productId}")
    public void deleteProduct(
            @PathVariable("productId") Integer id) {
        productRepository.deleteById(id);
    }

    @PutMapping("/orm/products/{productId}")
    public Product updateProduct(
            @PathVariable("productId") Integer id,
            @RequestBody Product productUpdates) {
        Product product = productRepository.findById(id).get();
        product.setName(productUpdates.getName());
        product.setPrice(productUpdates.getPrice());
        product.setQuantity(productUpdates.getQuantity());
        return productRepository.save(product);
    }
}

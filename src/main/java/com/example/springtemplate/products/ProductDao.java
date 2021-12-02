package com.example.springtemplate.products;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProductDao {
  @Autowired
  ProductRepository productRepository;

  @GetMapping("/orm/products/create/{nm}/{pr}/{qu}")
  public Product createProduct(
          @PathVariable("nm") String name,
          @PathVariable("pr") Double price,
          @PathVariable("qu") Integer quantity) {
    Product product = new Product(name, price, quantity);
    return productRepository.save(product);
  }

  @GetMapping("/orm/products/find")
  public List<Product> findAllProducts() {
    return (List<Product>) productRepository.findAll();
  }

  @GetMapping("orm/products/find/id/{productId}")
  public Product findProductById(
          @PathVariable("productId") Integer productId) {
    return productRepository.findById(productId).get();
  }


  @GetMapping("/orm/products/delete/{productId}")
  public void deleteProduct(
          @PathVariable("productId") Integer id) {
    productRepository.deleteById(id);
  }

  @GetMapping("/orm/products/update/{productId}/{price}/{quantity}")
  public Product updateProduct(
          @PathVariable("productId") Integer id,
          @PathVariable("price") Double price,
          @PathVariable("quantity") Integer quantity) {
    Product product = productRepository.findById(id).get();
    product.setPrice(price);
    product.setQuantity(quantity);
    return productRepository.save(product);
  }
}

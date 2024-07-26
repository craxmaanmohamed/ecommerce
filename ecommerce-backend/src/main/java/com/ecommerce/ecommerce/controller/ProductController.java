package com.ecommerce.ecommerce.controller;

import com.ecommerce.ecommerce.models.Product;
import com.ecommerce.ecommerce.services.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

    @RestController
    @RequestMapping("/api/products")
    public class ProductController {
        private final ProductService service;

        public ProductController(ProductService service) {
            this.service = service;
        }

        @GetMapping
        public ResponseEntity<List<Product>> getProducts() {
            return ResponseEntity.ok(service.getAllProducts());
        }

        @GetMapping("/{id}")
        public ResponseEntity<Product> getProduct(@PathVariable Long id) {
            return ResponseEntity.ok(service.getaProduct(id));
        }

        @PostMapping
        public ResponseEntity<Product> saveProduct(@RequestBody Product product) {
            return ResponseEntity.ok(service.saveProductInfo(product));
        }

        @PutMapping("/{id}")
        public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product) {
            return ResponseEntity.ok(service.updateProduct(id, product));
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
            service.deleteProduct(id);
            return ResponseEntity.noContent().build();
        }
    }
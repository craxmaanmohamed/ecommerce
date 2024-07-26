package com.ecommerce.ecommerce.services;

import com.ecommerce.ecommerce.Repositories.ProductRepository;
import com.ecommerce.ecommerce.models.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    // Save product
    public Product saveProductInfo(Product product) {
        return repo.save(product);
    }

    // Get a product by ID
    public Product getaProduct(Long id) {
        return repo.findById(id).orElse(null);
    }

    // Get all products
    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    // Update a product
    public Product updateProduct(Long id, Product productDetails) {
        return repo.findById(id).map(product -> {
            product.setName(productDetails.getName());
            product.setDescription(productDetails.getDescription());
            product.setPrice(productDetails.getPrice());
            product.setImageUrl(productDetails.getImageUrl());
            return repo.save(product);
        }).orElse(null);
    }

    // Delete a product
    public boolean deleteProduct(Long id) {
        return repo.findById(id).map(product -> {
            repo.delete(product);
            return true;
        }).orElse(false);
    }
}
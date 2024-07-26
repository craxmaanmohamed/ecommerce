package com.ecommerce.ecommerce.controller;

import com.ecommerce.ecommerce.models.Order;
import com.ecommerce.ecommerce.services.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService service;

    public OrderController(OrderService service) {
        this.service = service;
    }

    // Get all orders
    @GetMapping("/getorders")
    public ResponseEntity<List<Order>> getOrders() {
        return ResponseEntity.ok(service.getAllOrders());
    }

    // Get order by ID
    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrder(@PathVariable Long id) {
        return ResponseEntity.ok(service.getaOrder(id));
    }

    // Save order
    @PostMapping("/addorder")
    public ResponseEntity<Order> saveOrder(@RequestBody Order order) {
        return ResponseEntity.ok(service.saveOrderInfo(order));
    }

    // Update order
    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order orderDetails) {
        return ResponseEntity.ok(service.updateOrder(id, orderDetails));
    }

    // Delete order
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        service.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }
}
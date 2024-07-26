package com.ecommerce.ecommerce.services;

import com.ecommerce.ecommerce.Repositories.OrderRepository;
import com.ecommerce.ecommerce.models.Order;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    private final OrderRepository repo;

    public OrderService(OrderRepository repo) {
        this.repo = repo;
    }

    // Save order
    public Order saveOrderInfo(Order order) {
        return repo.save(order);
    }

    // Get an order by ID
    public Order getaOrder(Long id) {
        return repo.findById(id).orElse(null);
    }

    // Get all orders
    public List<Order> getAllOrders() {
        return repo.findAll();
    }

    // Update an order
    public Order updateOrder(Long id, Order orderDetails) {
        return repo.findById(id).map(order -> {
            order.setOrderItems(orderDetails.getOrderItems());
            order.setTotalAmount(orderDetails.getTotalAmount());
            return repo.save(order);
        }).orElse(null);
    }

    // Delete an order
    public boolean deleteOrder(Long id) {
        return repo.findById(id).map(order -> {
            repo.delete(order);
            return true;
        }).orElse(false);
    }
}
package com.team9.carshop.service;

import com.team9.carshop.entity.Cart;
import com.team9.carshop.entity.CartItem;
import com.team9.carshop.exception.ResourceNotFoundException;
import com.team9.carshop.repository.CartRepository;
import com.team9.carshop.repository.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    public Cart createCart() {
        Cart cart = new Cart();
        return cartRepository.save(cart);
    }

    public CartItem addCartItem(Long cartId, CartItem cartItem) {
        Cart cart = cartRepository.findById(cartId).orElseThrow(() -> new ResourceNotFoundException("Cart not found"));
        cartItem.setCart(cart);
        return cartItemRepository.save(cartItem);
    }

    public void removeItemFromCart(Long cartId, String productId) {
        Cart cart = cartRepository.findById(cartId).orElseThrow(() -> new ResourceNotFoundException("Cart not found"));
        CartItem itemToRemove = cart.getItems().stream()
                .filter(item -> item.getProductId().equals(productId))
                .findFirst()
                .orElseThrow(() -> new ResourceNotFoundException("Item not found in cart"));
        cart.getItems().remove(itemToRemove);
        cartItemRepository.delete(itemToRemove);
    }

    public List<CartItem> getCartItems(Long cartId) {
        Cart cart = cartRepository.findById(cartId).orElseThrow(() -> new ResourceNotFoundException("Cart not found"));
        return cart.getItems();
    }

    public CartItem updateCartItemQuantity(Long cartId, String productId, int quantity) {
        Cart cart = cartRepository.findById(cartId).orElseThrow(() -> new ResourceNotFoundException("Cart not found"));
        CartItem itemToUpdate = cart.getItems().stream()
                .filter(item -> item.getProductId().equals(productId))
                .findFirst()
                .orElseThrow(() -> new ResourceNotFoundException("Item not found in cart"));
        itemToUpdate.setQuantity(quantity);
        return cartItemRepository.save(itemToUpdate);
    }

    public double getTotalPrice(Long cartId) {
        Cart cart = cartRepository.findById(cartId).orElseThrow(() -> new ResourceNotFoundException("Cart not found"));
        return cart.getItems().stream()
                .mapToDouble(item -> item.getQuantity() * getProductPrice(item.getProductId())) // getProductPrice 메서드로 상품 가격을 가져오는 로직을 구현해야 함
                .sum();
    }

    private double getProductPrice(String productId) {
        // 실제 구현 시, 상품의 가격을 가져오는 로직을 추가해야 합니다.
        // 예시로 임의의 가격을 반환합니다.
        return 10.0; // 임의의 가격
    }
}

package com.team9.carshop.controller;

import com.team9.carshop.entity.Cart;
import com.team9.carshop.entity.CartItem;
import com.team9.carshop.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/create")
    public ResponseEntity<Cart> createCart() {
        Cart cart = cartService.createCart();
        return ResponseEntity.ok(cart);
    }

    @PostMapping("/{cartId}/add")
    public ResponseEntity<CartItem> addCartItem(@PathVariable Long cartId, @RequestBody CartItem cartItem) {
        CartItem addedItem = cartService.addCartItem(cartId, cartItem);
        return ResponseEntity.ok(addedItem);
    }

    @DeleteMapping("/{cartId}/items/{productId}")
    public ResponseEntity<Void> removeItemFromCart(@PathVariable Long cartId, @PathVariable String productId) {
        cartService.removeItemFromCart(cartId, productId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{cartId}/items")
    public ResponseEntity<List<CartItem>> getCartItems(@PathVariable Long cartId) {
        List<CartItem> items = cartService.getCartItems(cartId);
        return ResponseEntity.ok(items);
    }

    @PutMapping("/{cartId}/items/{productId}")
    public ResponseEntity<CartItem> updateCartItemQuantity(@PathVariable Long cartId, @PathVariable String productId, @RequestParam int quantity) {
        CartItem updatedItem = cartService.updateCartItemQuantity(cartId, productId, quantity);
        return ResponseEntity.ok(updatedItem);
    }

    @GetMapping("/{cartId}/total")
    public ResponseEntity<Double> getTotalPrice(@PathVariable Long cartId) {
        double totalPrice = cartService.getTotalPrice(cartId);
        return ResponseEntity.ok(totalPrice);
    }
}

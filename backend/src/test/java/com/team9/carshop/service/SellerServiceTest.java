//package com.team9.carshop.service;
//
//import static org.junit.jupiter.api.Assertions.*;
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.Mockito.*;
//
//import com.team9.carshop.dto.OrderManageDetailDto;
//import com.team9.carshop.dto.UpdateDeliveryStatusDto;
//import com.team9.carshop.enums.DeliveryStatus;
//import com.team9.carshop.exception.OrderNotFoundException;
//import com.team9.carshop.exception.SaleNotFoundException;
//import com.team9.carshop.repository.DeliveryRepository;
//import com.team9.carshop.repository.ItemRepository;
//import com.team9.carshop.repository.OrderItemRepository;
//import com.team9.carshop.repository.OrderRepository;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import java.util.Optional;
//import org.springframework.transaction.annotation.Transactional;
//
//@SpringBootTest
//@Transactional
//class SellerServiceTest {
//
//    @Mock
//    private OrderItemRepository orderItemRepository;
//
//    @Mock
//    private OrderRepository orderRepository;
//
//    @Mock
//    private ItemRepository itemRepository;
//
//    @Mock
//    private DeliveryRepository deliveryRepository;
//
//    private SellerService sellerService;
//
//    @BeforeEach
//    void setUp() {
//        MockitoAnnotations.openMocks(this);
//        sellerService = new SellerService(orderItemRepository, orderRepository, itemRepository, deliveryRepository);
//    }
//
////    @Test
////    void getMyOrderList_ShouldReturnOrderList_WhenOrdersExist() {
////        Long sellerId = 1L;
////        Pageable pageable = PageRequest.of(0, 10);
////
////        Item item = mock(Item.class);
////        when(item.getName()).thenReturn("Test Item");
////
////        Category categories = mock(Category.class);
////        when(categories.getFirst()).thenReturn(mock(Category.class));
////        when(item.getCategories()).thenReturn(categories);
////
////        Member member = mock(Member.class);
////        Order order = mock(Order.class);
////        Delivery delivery = mock(Delivery.class);
////
////        OrderItem orderItem = mock(OrderItem.class);
////        when(orderItem.getItem()).thenReturn(item);
////        when(orderItem.getOrder()).thenReturn(order);
////        when(orderItem.getPrice()).thenReturn(1000L);
////        when(orderItem.getCount()).thenReturn(2);
////        when(orderItem.getTotalPrice()).thenReturn(2000L);
////        when(orderItem.getCreatedAt()).thenReturn(null);
////
////        Page<OrderItem> orderItemPage = new PageImpl<>(List.of(orderItem));
////        when(orderItemRepository.findOrderItemPageBySellerId(any(Long.class), any(Pageable.class)))
////            .thenReturn(orderItemPage);
////
////        Page<OrderManageListDto> result = sellerService.getMyOrderList(sellerId, pageable);
////
////        assertFalse(result.isEmpty());
////    }
//
////    @Test
////    void getMyOrderList_ShouldThrowException_WhenNoOrdersExist() {
////        Long sellerId = 1L;
////        Pageable pageable = PageRequest.of(0, 10);
////
////        Page<OrderItem> emptyPage = Page.empty();
////        when(orderItemRepository.findOrderItemPageBySellerId(any(Long.class), any(Pageable.class)))
////            .thenReturn(emptyPage);
////
////        assertThrows(OrderNotFoundException.class, () -> sellerService.getMyOrderList(sellerId, pageable));
////    }
//
//    @Test
//    void getMyOrderDetail_ShouldReturnOrderDetail_WhenOrderExists() {
//        Long orderId = 1L;
//        Long itemId = 1L;
//
//        Order order = Mockito.mock(Order.class);
//        Item item = Mockito.mock(Item.class);
//        Mockito.when(orderRepository.findById(orderId)).thenReturn(Optional.of(order));
//        Mockito.when(itemRepository.findById(itemId)).thenReturn(Optional.of(item));
//
//        OrderManageDetailDto result = sellerService.getMyOrderDetail(orderId, itemId);
//
//        assertNotNull(result);
//    }
//
//    @Test
//    void getMyOrderDetail_ShouldThrowException_WhenOrderNotFound() {
//        Long orderId = 1L;
//        Long itemId = 1L;
//
//        Mockito.when(orderRepository.findById(orderId)).thenReturn(Optional.empty());
//
//        assertThrows(OrderNotFoundException.class, () -> sellerService.getMyOrderDetail(orderId, itemId));
//    }
//
//    @Test
//    void updateDeliveryStatus_ShouldUpdateStatus_WhenDeliveryExists() {
//        UpdateDeliveryStatusDto dto = new UpdateDeliveryStatusDto();
//        dto.setDeliveryId(1L);
//        dto.setDeliveryStatus(DeliveryStatus.DELIVERED.name());
//
//        Delivery delivery = Mockito.mock(Delivery.class);
//        Mockito.when(deliveryRepository.findById(dto.getDeliveryId())).thenReturn(Optional.of(delivery));
//
//        sellerService.updateDeliveryStatus(dto);
//
//        Mockito.verify(delivery).setStatus(DeliveryStatus.DELIVERED);
//    }
//
//    @Test
//    void updateDeliveryStatus_ShouldThrowException_WhenDeliveryNotFound() {
//        UpdateDeliveryStatusDto dto = new UpdateDeliveryStatusDto();
//        dto.setDeliveryId(1L);
//
//        Mockito.when(deliveryRepository.findById(dto.getDeliveryId())).thenReturn(Optional.empty());
//
//        assertThrows(OrderNotFoundException.class, () -> sellerService.updateDeliveryStatus(dto));
//    }
//
////    @Test
////    void getMySaleList_ShouldReturnSaleList_WhenSalesExist() {
////        Long sellerId = 1L;
////        Pageable pageable = PageRequest.of(0, 10);
////
////        Item item = mock(Item.class);
////        when(item.getName()).thenReturn("Test Item");
////
////        Member member = mock(Member.class);
////        Order order = mock(Order.class);
////        Delivery delivery = mock(Delivery.class);
////
////        OrderItem orderItem = mock(OrderItem.class);
////        when(orderItem.getItem()).thenReturn(item);
////        when(orderItem.getOrder()).thenReturn(order);
////        when(orderItem.getCount()).thenReturn(2);
////        when(orderItem.getTotalPrice()).thenReturn(2000L);
////
////        Page<OrderItem> orderItemPage = new PageImpl<>(List.of(orderItem));
////        when(orderItemRepository.findSalePageBySellerId(any(Long.class), any(Pageable.class)))
////            .thenReturn(orderItemPage);
////
////        Page<SaleListDto> result = sellerService.getMySaleList(sellerId, pageable);
////
////        assertFalse(result.isEmpty());
////    }
//
////    @Test
////    void getMySaleList_ShouldThrowException_WhenNoSalesExist() {
////        Long sellerId = 1L;
////        Pageable pageable = PageRequest.of(0, 10);
////
////        Page<OrderItem> emptyPage = Page.empty();
////        when(orderItemRepository.findSalePageBySellerId(any(Long.class), any(Pageable.class)))
////            .thenReturn(emptyPage);
////
////        assertThrows(SaleNotFoundException.class, () -> sellerService.getMySaleList(sellerId, pageable));
////    }
//}
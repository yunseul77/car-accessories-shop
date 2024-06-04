package com.team9.carshop.controller;

import com.team9.carshop.dto.OrderManageListDto;
import com.team9.carshop.service.SellerService;
<<<<<<< Updated upstream

//import java.awt.print.Pageable;
import org.springframework.data.domain.Pageable;
=======
>>>>>>> Stashed changes
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping("/seller")
@RestController
public class SellerController {

    private final SellerService sellerService;

    @GetMapping("/{sellerId}/orderlist")
    public ResponseEntity<Page<OrderManageListDto>> showMyOrderList(
        @PathVariable Long sellerId,
        @RequestParam(name = "pageindex", defaultValue = "0") int pageIndex,
        @RequestParam(name = "pagesize", defaultValue = "10") int pageSize,
        @RequestParam(name = "sort", defaultValue = "updatedAt") String sort) {

        Pageable pageable = PageRequest.of(pageIndex, pageSize, Sort.by(Direction.DESC, sort));


        Page<OrderManageListDto> myOrderList = sellerService.getMyOrderList(sellerId, pageable);
        return ResponseEntity.ok(myOrderList);


    }

}

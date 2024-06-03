package com.team9.carshop.controller;

import com.team9.carshop.dto.SaleListDto;
import com.team9.carshop.service.SellerService;

//import java.awt.print.Pageable;
import org.springframework.data.domain.Pageable;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/seller")
public class SellerController {

    private final SellerService sellerService;

    @GetMapping("/{sellerId}/salelist")
    public ResponseEntity<Page<SaleListDto>> showMyOrderList(
        @PathVariable Long sellerId,
        @RequestParam(name = "pageindex", defaultValue = "0") int pageIndex,
        @RequestParam(name = "pagesize", defaultValue = "10") int pageSize,
        @RequestParam(name = "sort", defaultValue = "updatedAt") String sort) {

        Pageable pageable = PageRequest.of(pageIndex, pageSize, Direction.DESC, sort);

        Page<SaleListDto> myOrderList = sellerService.getMyOrderList(sellerId, pageable);
        return ResponseEntity.ok(myOrderList);


    }

}

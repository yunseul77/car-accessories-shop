package com.team9.carshop.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class CustomMimeTypeFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
        FilterChain filterChain)
        throws ServletException, IOException {
        String uri = request.getRequestURI();

        if (uri.endsWith(".css")) {
            response.setHeader("Content-Type", "text/css");
        } else if (uri.endsWith(".js")) {
            response.setHeader("Content-Type", "application/javascript");
        } else if (uri.endsWith(".media")) {
            response.setHeader("Content-Type", "image/jpeg");
        } else if (uri.endsWith(".png")) {
            response.setHeader("Content-Type", "image/png");
        } else if (uri.endsWith(".gif")) {
            response.setHeader("Content-Type", "image/gif");
        } else if (uri.endsWith(".html")) {
            response.setHeader("Content-Type", "text/html");
        }
        filterChain.doFilter(request, response);
    }
}
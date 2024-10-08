package com.team9.carshop.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import java.util.List;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
            .info(new Info()
                .title("Car Shop API")
                .version("1.0")
                .description("Car Shop API documentation"))
            .servers(List.of(new Server().url("http://localhost:8080"))); // 필요 시 서버 정보 추가
    }
}
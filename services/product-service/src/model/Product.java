// src/main/java/com/micromart/productservice/model/Product.java
package com.micromart.productservice.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "products")
public class Product {
    @Id
    private String id;
    private String name;
    private String description;
    private BigDecimal price;
    private Integer stock;
    private List<String> categories;
    private List<String> images;
    private boolean available;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
package com.lgf.tapper.domain;

import lombok.Data;
import lombok.Setter;
import org.springframework.data.annotation.Id;

@Data
@Setter
public class Product {

    @Id
    private String id;
    private String name;

}

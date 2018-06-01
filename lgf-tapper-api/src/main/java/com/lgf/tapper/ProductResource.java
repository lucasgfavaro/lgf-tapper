package com.lgf.tapper;

import com.lgf.tapper.domain.Product;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/")
public class ProductResource {

    @RequestMapping(value = "/products", method = RequestMethod.GET)
    @ResponseBody
    public List<Product> getProduct() {
        List<Product> products = new ArrayList<Product>();

        for (Long i = Long.parseLong("1"); i <= 3; i++) {
            Product product = new Product();
            product.setId(i);
            product.setDescription("name " + i);
            products.add(product);
        }

        return products;
    }
}

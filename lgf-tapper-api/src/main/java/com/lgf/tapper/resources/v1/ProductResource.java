package com.lgf.tapper.resources.v1;

import com.lgf.tapper.domain.Product;
import com.lgf.tapper.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/")
public class ProductResource {

    private ProductService service;

    @Autowired
    public ProductResource(ProductService productService) {
         this.service = productService;
    }

    @RequestMapping(value = "/products", method = RequestMethod.GET)
    @ResponseBody
    public List<Product> getProduct() {
        /*
        List<Product> products = new ArrayList<Product>();

        for (Long i = Long.parseLong("1"); i <= 3; i++) {
            Product product = new Product();
            product.setId(i.toString());
            product.setDescription("name " + i);
            products.add(product);
        }*/


        return service.getAll();
    }
}

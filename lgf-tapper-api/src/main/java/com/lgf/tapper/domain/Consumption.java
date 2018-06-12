package com.lgf.tapper.domain;

import lombok.Data;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.sql.Date;

@Data
@Setter
public class Consumption {

    @Id
    private String id;
    private Date createdOn;
    private Product product;
    private ClubMember clubMember;

}

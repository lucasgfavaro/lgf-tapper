package com.lgf.tapper.domain;

import lombok.Data;
import lombok.Setter;
import org.springframework.data.annotation.Id;

@Data
@Setter
public class ClubMember {

    @Id
    private String id;
    private String firstName;
    private String lastName;

}

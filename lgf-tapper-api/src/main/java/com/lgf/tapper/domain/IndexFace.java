package com.lgf.tapper.domain;

import lombok.Data;
import lombok.Setter;

@Data
@Setter
public class IndexFace {
	
	private String photoBase64Encoded;
	private ClubMember clubMember;
	
}

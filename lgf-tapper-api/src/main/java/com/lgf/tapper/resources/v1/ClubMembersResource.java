package com.lgf.tapper.resources.v1;

import com.lgf.tapper.domain.ClubMember;
import com.lgf.tapper.services.ClubMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/clubmembers")
public class ClubMembersResource {

	private ClubMemberService service;

	@Autowired
	public ClubMembersResource(ClubMemberService clubMemberService) {
		this.service = clubMemberService;
	}

	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public List<ClubMember> getClubMembers() {
		return service.getAll();
	}
}

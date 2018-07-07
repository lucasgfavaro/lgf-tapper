package com.lgf.tapper.services;

import com.lgf.tapper.domain.ClubMember;
import com.lgf.tapper.repository.ClubMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClubMemberService {

	private ClubMemberRepository repository;

	@Autowired
	public ClubMemberService(ClubMemberRepository repository) {
		this.repository = repository;
	}

	public List<ClubMember> getAll() {
		return (repository.findAll());
	}

	public ClubMember create(ClubMember clubMember) {
		clubMember = this.repository.insert(clubMember);
		return clubMember;
	}

	public ClubMember update(ClubMember clubMember) {
		clubMember = this.repository.save(clubMember);
		return clubMember;
	}

	public void delete(String clubMemberId) {
		this.repository.deleteById(clubMemberId);
	}
}

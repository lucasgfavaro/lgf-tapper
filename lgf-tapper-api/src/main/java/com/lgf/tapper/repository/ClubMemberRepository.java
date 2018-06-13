package com.lgf.tapper.repository;

import com.lgf.tapper.domain.ClubMember;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ClubMemberRepository extends MongoRepository<ClubMember, String> {

    public List<ClubMember> findAll();

}
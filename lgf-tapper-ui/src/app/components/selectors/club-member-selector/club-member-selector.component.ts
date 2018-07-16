import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ClubMember } from '../../../domain/clubMember';
import { ClubMemberService } from '../../../services/clubMember.service';

@Component({
  selector: 'app-club-member-selector',
  templateUrl: './club-member-selector.component.html',
  styleUrls: ['./club-member-selector.component.css']
})
export class ClubMemberSelectorComponent implements OnInit {

  clubMembers: ClubMember[];
  selectedClubMember: ClubMember;
  @Output() clubMemberSelected = new EventEmitter<ClubMember>();

  constructor(private clubMemberService: ClubMemberService) { }

  ngOnInit() {
    this.getClubMembers();
  }

  getClubMembers(): void {
    this.clubMemberService.getClubMembers()
        .subscribe(clubMembers => this.clubMembers = clubMembers);
  }

  onSelect(clubMember: ClubMember): void {
    this.selectedClubMember = clubMember;
    this.clubMemberSelected.emit(this.selectedClubMember);
  }

}

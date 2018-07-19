import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { ClubMember } from '../../../domain/clubMember';
import { ClubMemberService } from '../../../services/clubMember.service';

@Component({
  selector: 'app-club-member-selector',
  templateUrl: './club-member-selector.component.html',
  styleUrls: ['./club-member-selector.component.css']
})
export class ClubMemberSelectorComponent implements OnInit {

  clubMembers: ClubMember[];
  @Input() selectedClubMember: ClubMember;
  @Output() clubMemberSelected = new EventEmitter<ClubMember>();

  constructor(private clubMemberService: ClubMemberService) { }

  ngOnInit() {
    this.getClubMembers();
  }

  getSelectedClubMember(): ClubMember {
    return this.selectedClubMember;
  }

  getClubMembers(): void {
    this.clubMemberService.getClubMembers()
      .subscribe(clubMembers => this.clubMembers = clubMembers);
  }

  onSelect(clubMember: ClubMember): void {
    this.selectedClubMember = clubMember;
    this.clubMemberSelected.emit(this.selectedClubMember);
  }

  compareFn(x: ClubMember, y: ClubMember): boolean {
    return x && y ? x.id === y.id : x === y;
  }

}

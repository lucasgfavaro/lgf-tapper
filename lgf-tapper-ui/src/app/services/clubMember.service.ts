import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClubMember } from '../domain/clubMember';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ClubMemberService {
  private clubMembersUrl = 'http://localhost:9091/api/clubmembers';

  constructor(private http: HttpClient,
  private messageService: MessageService) { }

  getClubMembers(): Observable<ClubMember[]> {
    this.messageService.add('ClubMemberService: fetched clubMembers');
    return this.http.get<ClubMember[]>(this.clubMembersUrl)
  }
}

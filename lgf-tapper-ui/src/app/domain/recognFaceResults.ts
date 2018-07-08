import { RecognFace } from './recognFace';
import { ClubMember } from "./clubMember";

export class RecognFaceResults {
constructor(
  public recognFace: RecognFace,
  public clubMember: ClubMember) { }
}

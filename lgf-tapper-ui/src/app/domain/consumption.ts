import { Product } from './product';
import { ClubMember } from './clubMember';

export class Consumption {
constructor(
  public id: number,
  public date: Date,
  public product: Product,
  public clubMember: ClubMember,
  public photoBase64Encoded: string) { }
}

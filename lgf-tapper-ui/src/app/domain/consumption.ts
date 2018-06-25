import { Product } from './product';
import { ClubMember } from './clubMember';

export class Consumption {
  id: number;
  date: Date;
  product: Product;
  clubMember: ClubMember;
  photoBase64Encoded: string;
}

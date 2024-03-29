
export class CartLine {
  key: string;
  title: string;
  volume: number;
  imageUrl: string;
  quantity: number;

  constructor(init?: Partial<CartLine>) {
    Object.assign(this, init);
  }
} 


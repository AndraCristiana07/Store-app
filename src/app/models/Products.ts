export class Products {
  id!: number;
  title!: string;
  type!: string;
  description!: string;
  filename!: string;
  height!: number;
  width!: number;
  price!: number;
  rating!: number;
  addedToCart: boolean = false;
  favorite: boolean = false;
}

import { IBoundingBox } from "../interfaces/bounding-box-interface";

export class BoundingBox implements IBoundingBox {
  constructor(
    readonly top: number,
    readonly left: number,
    readonly width: number,
    readonly height: number
  ) {}
}

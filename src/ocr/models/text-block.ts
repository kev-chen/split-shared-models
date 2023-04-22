import { ITextBlock } from "../interfaces/text-block-interface";
import { BoundingBox } from "./bounding-box";

export class TextBlock implements ITextBlock {
  constructor(
    readonly text: string,
    readonly boundingBox: BoundingBox,
    readonly confidence: number
  ) {}
}

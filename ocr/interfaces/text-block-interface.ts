import { IBoundingBox } from "./bounding-box-interface";

export interface ITextBlock {
    readonly text: string;
    readonly boundingBox: IBoundingBox;
    readonly confidence: number;
}

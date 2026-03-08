import { Tree } from "../Tree";
import largeTreeAsset from '../../assets/scenery/trees/large-tree.png';

export class LargeTree extends Tree {
    constructor(height: number) {
        super(height, largeTreeAsset);
    }
}
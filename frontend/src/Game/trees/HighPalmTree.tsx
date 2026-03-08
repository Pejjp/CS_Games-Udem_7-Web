import { Tree } from "../Tree";
import highPalmTreeAsset from '../../assets/scenery/trees/high-palm.png';

export class HighPalmTree extends Tree {
    constructor(height: number) {
        super(height, highPalmTreeAsset);
    }
}
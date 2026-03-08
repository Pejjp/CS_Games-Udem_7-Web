import { Tree } from "../Tree";
import mediumPalmTreeAsset from '../../assets/scenery/trees/medium-palm.png';

export class MediumPalmTree extends Tree {
    constructor(height: number) {
        super(height, mediumPalmTreeAsset);
    }
}
import { Sample } from "../models/sample";
import { Repository } from "./repository";

export class SampleRepository extends Repository {

    constructor() {
        super(Sample);
    }  
}

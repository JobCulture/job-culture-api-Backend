import { dataSource } from "../typeormConfig";

export class Repository {

    constructor(modelClass) {
        this.entityManager =  dataSource.getRepository(modelClass);
    }

    findAll() {
        return this.entityManager.find();
    }

    save(model) {
        return this.entityManager.save(model);
    }

    delete(query) {
        return this.entityManager.delete(query);
    }
}

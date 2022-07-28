import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { object, string, date, number } from 'yup';

const sampleSchema = object({
    id: number(),
    description: string().required(),
    createdAt: date().required(),
});

@Entity()
export class Sample {
    
    @PrimaryGeneratedColumn()
    id;
    
    @Column("varchar", { length: 200 })
    description;

    @Column("timestamp")
    createdAt;

    constructor(values = {}) {
        this.description = values.description;
        this.createdAt = new Date();
    }

    validate() {
        return sampleSchema.validate(this);
    }
}

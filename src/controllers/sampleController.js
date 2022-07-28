import logger from "../logger";
import { Sample } from "../models/sample";
import { BaseController } from "./baseContoller";

export class SampleController extends BaseController {
    constructor(sampleRepository) {
        super();
        this.sampleRepository = sampleRepository;
    }

    routes() {
        this.router.get('/samples', this.index);
        this.router.post('/samples', this.create);
        this.router.delete('/samples/:id', this.destroy);
    }

    index = async (req, res) => {
        const samples = await this.sampleRepository.findAll();
        logger.info("list sample log")
        res.status(200).json(samples);
    }

    create = async (req, res) => {
        const { description } = req.body;

        const sample = new Sample({ description });
        const validateResult = await sample.validate();
        logger.info("validate %j", validateResult);
        const sampleSaved = await this.sampleRepository.save(sample);

        res.status(200).json({
            message: 'Sample created successfully',
            sample: sampleSaved,
        });
    }

     destroy = async (req, res) => {
        const { id } = req.params;
        await this.sampleRepository.delete({ id });
        res.status(204).json();
    }
}

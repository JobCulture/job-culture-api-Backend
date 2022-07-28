import express from "express";
import { SampleController } from "./controllers/sampleController";
import logger from "./logger";
import { SampleRepository } from "./repositories/sampleRepository";

export const initServer = () => {
    const app = express();
    const port = process.env.APP_PORT;
    app.use(express.json());

    // repository instances
    const sampleRepository = new SampleRepository();

    // controller instances
    const sampleController = new SampleController(sampleRepository);
    
    [
        sampleController,
        //companyController,
        //userController,
    ].forEach(controller => {
        app.use(controller.useRoutes());
    })
    

    app.listen(port, () => {
        logger.info(`Culture job listening on port ${port}`)
    })
    
    return app;
};
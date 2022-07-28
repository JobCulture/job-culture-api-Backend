import express from 'express';
import { ValidationError } from 'yup';
import { BusinessError, RecordNotFoundError } from '../errors/index';
import logger from '../logger';

class ApiRouter {
    constructor() {
        this.expressRouter = express.Router();
        ['all', 'get', 'post', 'put', 'delete'].forEach(verb => {
            this[verb] = (urlPath, action) => {
                logger.info(`[API Routes]: [${verb}] ${urlPath}"`);
                this.expressRouter[verb](urlPath, (req, res) => this.wrapAction(req, res, action));
            }
        })
    }

    wrapAction = (req, res, action) => {
        return Promise.resolve(action(req, res)).catch((err) => this.errorHandler(err, res))
    }

    errorHandler = (error, res) => {
        if (error instanceof RecordNotFoundError) {
            res.status(404).json({ message: 'Record not found' });
        } else if (error instanceof BusinessError) {
            res.status(400).json({ errors: error.errors });
        } else if (error instanceof ValidationError) {
            res.status(400).json({ errors: error.errors });
        } else {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

export class BaseController {
    constructor() {
        this.router = new ApiRouter();
    }

    useRoutes() {
        this.routes();
        return this.router.expressRouter;
    }

    routes() {
        throw new Error("Controller needs to implement routes");
    }
}

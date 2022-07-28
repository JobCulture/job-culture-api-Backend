export class RecordNotFoundError extends Error {}

export class BusinessError extends Error {}

export class ValidationError extends Error {
    constructor(errors) {
        this.errors = errors;
    }
}

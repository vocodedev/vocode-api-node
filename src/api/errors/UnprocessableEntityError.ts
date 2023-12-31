/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors";
import * as Vocode from "..";

export class UnprocessableEntityError extends errors.VocodeError {
    constructor(body: Vocode.HttpValidationError) {
        super({
            statusCode: 422,
            body: body,
        });
        Object.setPrototypeOf(this, UnprocessableEntityError.prototype);
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const TwilioAccountConnectionUpdateParams: core.serialization.ObjectSchema<
    serializers.TwilioAccountConnectionUpdateParams.Raw,
    Vocode.TwilioAccountConnectionUpdateParams
> = core.serialization.object({
    credentials: core.serialization
        .lazy(async () => (await import("..")).TwilioAccountConnectionUpdateParamsCredentials)
        .optional(),
});

export declare namespace TwilioAccountConnectionUpdateParams {
    interface Raw {
        credentials?: serializers.TwilioAccountConnectionUpdateParamsCredentials.Raw | null;
    }
}

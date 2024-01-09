/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const OpenAiAccountConnectionUpdateParams: core.serialization.ObjectSchema<
    serializers.OpenAiAccountConnectionUpdateParams.Raw,
    Vocode.OpenAiAccountConnectionUpdateParams
> = core.serialization.object({
    credentials: core.serialization
        .lazy(async () => (await import("..")).OpenAiAccountConnectionUpdateParamsCredentials)
        .optional(),
});

export declare namespace OpenAiAccountConnectionUpdateParams {
    interface Raw {
        credentials?: serializers.OpenAiAccountConnectionUpdateParamsCredentials.Raw | null;
    }
}
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const OpenAiAccountConnectionParams: core.serialization.ObjectSchema<
    serializers.OpenAiAccountConnectionParams.Raw,
    Vocode.OpenAiAccountConnectionParams
> = core.serialization.object({
    credentials: core.serialization.lazyObject(async () => (await import("..")).OpenAiCredentials),
});

export declare namespace OpenAiAccountConnectionParams {
    interface Raw {
        credentials: serializers.OpenAiCredentials.Raw;
    }
}
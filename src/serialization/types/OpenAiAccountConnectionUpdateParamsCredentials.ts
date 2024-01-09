/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const OpenAiAccountConnectionUpdateParamsCredentials: core.serialization.Schema<
    serializers.OpenAiAccountConnectionUpdateParamsCredentials.Raw,
    Vocode.OpenAiAccountConnectionUpdateParamsCredentials
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).OpenAiCredentials),
    core.serialization.lazyObject(async () => (await import("..")).Undefined),
]);

export declare namespace OpenAiAccountConnectionUpdateParamsCredentials {
    type Raw = serializers.OpenAiCredentials.Raw | serializers.Undefined.Raw;
}
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const PlayHtVoiceUpdateParamsVoiceId: core.serialization.Schema<
    serializers.PlayHtVoiceUpdateParamsVoiceId.Raw,
    Vocode.PlayHtVoiceUpdateParamsVoiceId
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("..")).Undefined),
]);

export declare namespace PlayHtVoiceUpdateParamsVoiceId {
    type Raw = string | serializers.Undefined.Raw;
}

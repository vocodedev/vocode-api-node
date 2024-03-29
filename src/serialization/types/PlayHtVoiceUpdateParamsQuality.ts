/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const PlayHtVoiceUpdateParamsQuality: core.serialization.Schema<
    serializers.PlayHtVoiceUpdateParamsQuality.Raw,
    Vocode.PlayHtVoiceUpdateParamsQuality
> = core.serialization.undiscriminatedUnion([
    core.serialization.stringLiteral("faster"),
    core.serialization.stringLiteral("draft"),
    core.serialization.stringLiteral("low"),
    core.serialization.stringLiteral("medium"),
    core.serialization.stringLiteral("high"),
    core.serialization.stringLiteral("premium"),
    core.serialization.lazyObject(async () => (await import("..")).Undefined),
]);

export declare namespace PlayHtVoiceUpdateParamsQuality {
    type Raw = "faster" | "draft" | "low" | "medium" | "high" | "premium" | serializers.Undefined.Raw;
}

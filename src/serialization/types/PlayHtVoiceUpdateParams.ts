/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const PlayHtVoiceUpdateParams: core.serialization.ObjectSchema<
    serializers.PlayHtVoiceUpdateParams.Raw,
    Vocode.PlayHtVoiceUpdateParams
> = core.serialization.object({
    voiceId: core.serialization.property(
        "voice_id",
        core.serialization.lazy(async () => (await import("..")).PlayHtVoiceUpdateParamsVoiceId).optional()
    ),
    apiUserId: core.serialization.property(
        "api_user_id",
        core.serialization.lazy(async () => (await import("..")).PlayHtVoiceUpdateParamsApiUserId).optional()
    ),
    apiKey: core.serialization.property(
        "api_key",
        core.serialization.lazy(async () => (await import("..")).PlayHtVoiceUpdateParamsApiKey).optional()
    ),
});

export declare namespace PlayHtVoiceUpdateParams {
    interface Raw {
        voice_id?: serializers.PlayHtVoiceUpdateParamsVoiceId.Raw | null;
        api_user_id?: serializers.PlayHtVoiceUpdateParamsApiUserId.Raw | null;
        api_key?: serializers.PlayHtVoiceUpdateParamsApiKey.Raw | null;
    }
}

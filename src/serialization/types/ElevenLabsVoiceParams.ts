/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const ElevenLabsVoiceParams: core.serialization.ObjectSchema<
    serializers.ElevenLabsVoiceParams.Raw,
    Vocode.ElevenLabsVoiceParams
> = core.serialization.object({
    voiceId: core.serialization.property("voice_id", core.serialization.string()),
    stability: core.serialization.number().optional(),
    similarityBoost: core.serialization.property("similarity_boost", core.serialization.number().optional()),
    apiKey: core.serialization.property("api_key", core.serialization.string().optional()),
});

export declare namespace ElevenLabsVoiceParams {
    interface Raw {
        voice_id: string;
        stability?: number | null;
        similarity_boost?: number | null;
        api_key?: string | null;
    }
}

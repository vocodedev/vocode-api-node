/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const AzureVoice: core.serialization.ObjectSchema<serializers.AzureVoice.Raw, Vocode.AzureVoice> =
    core.serialization.object({
        id: core.serialization.string(),
        userId: core.serialization.property("user_id", core.serialization.string()),
        voiceName: core.serialization.property("voice_name", core.serialization.string()),
        pitch: core.serialization.number().optional(),
        rate: core.serialization.number().optional(),
    });

export declare namespace AzureVoice {
    interface Raw {
        id: string;
        user_id: string;
        voice_name: string;
        pitch?: number | null;
        rate?: number | null;
    }
}

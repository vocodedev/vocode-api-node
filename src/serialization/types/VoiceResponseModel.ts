/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const VoiceResponseModel: core.serialization.Schema<
    serializers.VoiceResponseModel.Raw,
    Vocode.VoiceResponseModel
> = core.serialization
    .union("type", {
        voice_azure: core.serialization.lazyObject(async () => (await import("..")).AzureVoice),
        voice_rime: core.serialization.lazyObject(async () => (await import("..")).RimeVoice),
        voice_eleven_labs: core.serialization.lazyObject(async () => (await import("..")).ElevenLabsVoice),
        voice_play_ht: core.serialization.lazyObject(async () => (await import("..")).PlayHtVoice),
    })
    .transform<Vocode.VoiceResponseModel>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace VoiceResponseModel {
    type Raw =
        | VoiceResponseModel.VoiceAzure
        | VoiceResponseModel.VoiceRime
        | VoiceResponseModel.VoiceElevenLabs
        | VoiceResponseModel.VoicePlayHt;

    interface VoiceAzure extends serializers.AzureVoice.Raw {
        type: "voice_azure";
    }

    interface VoiceRime extends serializers.RimeVoice.Raw {
        type: "voice_rime";
    }

    interface VoiceElevenLabs extends serializers.ElevenLabsVoice.Raw {
        type: "voice_eleven_labs";
    }

    interface VoicePlayHt extends serializers.PlayHtVoice.Raw {
        type: "voice_play_ht";
    }
}

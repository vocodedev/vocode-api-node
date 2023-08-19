/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const AgentUpdateParamsVoiceOne: core.serialization.Schema<
    serializers.AgentUpdateParamsVoiceOne.Raw,
    Vocode.AgentUpdateParamsVoiceOne
> = core.serialization
    .union("type", {
        voice_azure: core.serialization.lazyObject(async () => (await import("..")).AzureVoiceUpdateParams),
        voice_rime: core.serialization.lazyObject(async () => (await import("..")).RimeVoiceUpdateParams),
        voice_eleven_labs: core.serialization.lazyObject(async () => (await import("..")).ElevenLabsVoiceUpdateParams),
        voice_play_ht: core.serialization.lazyObject(async () => (await import("..")).PlayHtVoiceUpdateParams),
    })
    .transform<Vocode.AgentUpdateParamsVoiceOne>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace AgentUpdateParamsVoiceOne {
    type Raw =
        | AgentUpdateParamsVoiceOne.VoiceAzure
        | AgentUpdateParamsVoiceOne.VoiceRime
        | AgentUpdateParamsVoiceOne.VoiceElevenLabs
        | AgentUpdateParamsVoiceOne.VoicePlayHt;

    interface VoiceAzure extends serializers.AzureVoiceUpdateParams.Raw {
        type: "voice_azure";
    }

    interface VoiceRime extends serializers.RimeVoiceUpdateParams.Raw {
        type: "voice_rime";
    }

    interface VoiceElevenLabs extends serializers.ElevenLabsVoiceUpdateParams.Raw {
        type: "voice_eleven_labs";
    }

    interface VoicePlayHt extends serializers.PlayHtVoiceUpdateParams.Raw {
        type: "voice_play_ht";
    }
}
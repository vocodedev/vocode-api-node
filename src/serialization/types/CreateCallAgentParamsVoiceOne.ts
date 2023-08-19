/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const CreateCallAgentParamsVoiceOne: core.serialization.Schema<
    serializers.CreateCallAgentParamsVoiceOne.Raw,
    Vocode.CreateCallAgentParamsVoiceOne
> = core.serialization
    .union("type", {
        voice_azure: core.serialization.lazyObject(async () => (await import("..")).AzureVoiceParams),
        voice_rime: core.serialization.lazyObject(async () => (await import("..")).RimeVoiceParams),
        voice_eleven_labs: core.serialization.lazyObject(async () => (await import("..")).ElevenLabsVoiceParams),
        voice_play_ht: core.serialization.lazyObject(async () => (await import("..")).PlayHtVoiceParams),
    })
    .transform<Vocode.CreateCallAgentParamsVoiceOne>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace CreateCallAgentParamsVoiceOne {
    type Raw =
        | CreateCallAgentParamsVoiceOne.VoiceAzure
        | CreateCallAgentParamsVoiceOne.VoiceRime
        | CreateCallAgentParamsVoiceOne.VoiceElevenLabs
        | CreateCallAgentParamsVoiceOne.VoicePlayHt;

    interface VoiceAzure extends serializers.AzureVoiceParams.Raw {
        type: "voice_azure";
    }

    interface VoiceRime extends serializers.RimeVoiceParams.Raw {
        type: "voice_rime";
    }

    interface VoiceElevenLabs extends serializers.ElevenLabsVoiceParams.Raw {
        type: "voice_eleven_labs";
    }

    interface VoicePlayHt extends serializers.PlayHtVoiceParams.Raw {
        type: "voice_play_ht";
    }
}

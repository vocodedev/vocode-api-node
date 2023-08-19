/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "..";

export type CreateCallAgentParamsVoiceOne =
    | Vocode.CreateCallAgentParamsVoiceOne.VoiceAzure
    | Vocode.CreateCallAgentParamsVoiceOne.VoiceRime
    | Vocode.CreateCallAgentParamsVoiceOne.VoiceElevenLabs
    | Vocode.CreateCallAgentParamsVoiceOne.VoicePlayHt;

export declare namespace CreateCallAgentParamsVoiceOne {
    interface VoiceAzure extends Vocode.AzureVoiceParams {
        type: "voice_azure";
    }

    interface VoiceRime extends Vocode.RimeVoiceParams {
        type: "voice_rime";
    }

    interface VoiceElevenLabs extends Vocode.ElevenLabsVoiceParams {
        type: "voice_eleven_labs";
    }

    interface VoicePlayHt extends Vocode.PlayHtVoiceParams {
        type: "voice_play_ht";
    }
}

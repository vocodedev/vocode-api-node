/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "..";

export type VoiceResponseModel =
    | Vocode.VoiceResponseModel.VoiceAzure
    | Vocode.VoiceResponseModel.VoiceRime
    | Vocode.VoiceResponseModel.VoiceElevenLabs
    | Vocode.VoiceResponseModel.VoicePlayHt;

export declare namespace VoiceResponseModel {
    interface VoiceAzure extends Vocode.AzureVoice {
        type: "voice_azure";
    }

    interface VoiceRime extends Vocode.RimeVoice {
        type: "voice_rime";
    }

    interface VoiceElevenLabs extends Vocode.ElevenLabsVoice {
        type: "voice_eleven_labs";
    }

    interface VoicePlayHt extends Vocode.PlayHtVoice {
        type: "voice_play_ht";
    }
}

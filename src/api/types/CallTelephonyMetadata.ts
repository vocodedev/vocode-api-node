/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "..";

export type CallTelephonyMetadata =
    | Vocode.CallTelephonyMetadata.TelephonyMetadataVonage
    | Vocode.CallTelephonyMetadata.TelephonyMetadataTwilio;

export declare namespace CallTelephonyMetadata {
    interface TelephonyMetadataVonage extends Vocode.VonageTelephonyMetadata {
        type: "telephony_metadata_vonage";
    }

    interface TelephonyMetadataTwilio extends Vocode.TwilioTelephonyMetadata {
        type: "telephony_metadata_twilio";
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const CallTelephonyMetadata: core.serialization.Schema<
    serializers.CallTelephonyMetadata.Raw,
    Vocode.CallTelephonyMetadata
> = core.serialization
    .union("type", {
        telephony_metadata_vonage: core.serialization.lazyObject(
            async () => (await import("..")).VonageTelephonyMetadata
        ),
        telephony_metadata_twilio: core.serialization.lazyObject(
            async () => (await import("..")).TwilioTelephonyMetadata
        ),
    })
    .transform<Vocode.CallTelephonyMetadata>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace CallTelephonyMetadata {
    type Raw = CallTelephonyMetadata.TelephonyMetadataVonage | CallTelephonyMetadata.TelephonyMetadataTwilio;

    interface TelephonyMetadataVonage extends serializers.VonageTelephonyMetadata.Raw {
        type: "telephony_metadata_vonage";
    }

    interface TelephonyMetadataTwilio extends serializers.TwilioTelephonyMetadata.Raw {
        type: "telephony_metadata_twilio";
    }
}

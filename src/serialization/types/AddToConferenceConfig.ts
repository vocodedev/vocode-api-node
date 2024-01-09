/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const AddToConferenceConfig: core.serialization.ObjectSchema<
    serializers.AddToConferenceConfig.Raw,
    Vocode.AddToConferenceConfig
> = core.serialization.object({
    phoneNumber: core.serialization.property("phone_number", core.serialization.string()),
    placePrimaryOnHold: core.serialization.property("place_primary_on_hold", core.serialization.boolean().optional()),
});

export declare namespace AddToConferenceConfig {
    interface Raw {
        phone_number: string;
        place_primary_on_hold?: boolean | null;
    }
}
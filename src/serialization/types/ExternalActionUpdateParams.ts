/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const ExternalActionUpdateParams: core.serialization.ObjectSchema<
    serializers.ExternalActionUpdateParams.Raw,
    Vocode.ExternalActionUpdateParams
> = core.serialization.object({
    config: core.serialization.lazy(async () => (await import("..")).ExternalActionUpdateParamsConfig).optional(),
    actionTrigger: core.serialization.property(
        "action_trigger",
        core.serialization.lazy(async () => (await import("..")).ExternalActionUpdateParamsActionTrigger).optional()
    ),
});

export declare namespace ExternalActionUpdateParams {
    interface Raw {
        config?: serializers.ExternalActionUpdateParamsConfig.Raw | null;
        action_trigger?: serializers.ExternalActionUpdateParamsActionTrigger.Raw | null;
    }
}

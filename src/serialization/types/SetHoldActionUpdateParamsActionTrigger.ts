/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const SetHoldActionUpdateParamsActionTrigger: core.serialization.Schema<
    serializers.SetHoldActionUpdateParamsActionTrigger.Raw,
    Vocode.SetHoldActionUpdateParamsActionTrigger
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("..")).SetHoldActionUpdateParamsActionTriggerZero),
    core.serialization.lazyObject(async () => (await import("..")).Undefined),
]);

export declare namespace SetHoldActionUpdateParamsActionTrigger {
    type Raw = serializers.SetHoldActionUpdateParamsActionTriggerZero.Raw | serializers.Undefined.Raw;
}

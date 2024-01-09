/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Vocode from "../../../../api";
import * as core from "../../../../core";

export const UpdateNumberRequestLabel: core.serialization.Schema<
    serializers.UpdateNumberRequestLabel.Raw,
    Vocode.UpdateNumberRequestLabel
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).Undefined),
]);

export declare namespace UpdateNumberRequestLabel {
    type Raw = string | serializers.Undefined.Raw;
}
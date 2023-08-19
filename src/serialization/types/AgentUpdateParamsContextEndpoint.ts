/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const AgentUpdateParamsContextEndpoint: core.serialization.Schema<
    serializers.AgentUpdateParamsContextEndpoint.Raw,
    Vocode.AgentUpdateParamsContextEndpoint
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("..")).Undefined),
]);

export declare namespace AgentUpdateParamsContextEndpoint {
    type Raw = string | serializers.Undefined.Raw;
}
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Vocode from "../../../../api";
import * as core from "../../../../core";

export const UpdateNumberRequestInboundAgent: core.serialization.Schema<
    serializers.UpdateNumberRequestInboundAgent.Raw,
    Vocode.UpdateNumberRequestInboundAgent
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).AgentUpdateParams),
    core.serialization.lazyObject(async () => (await import("../../..")).Undefined),
]);

export declare namespace UpdateNumberRequestInboundAgent {
    type Raw = string | serializers.AgentUpdateParams.Raw | serializers.Undefined.Raw;
}

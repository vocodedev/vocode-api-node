/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Vocode from "../../../../../api";
import * as core from "../../../../../core";

export const UpdateNumberRequest: core.serialization.Schema<
    serializers.UpdateNumberRequest.Raw,
    Omit<Vocode.UpdateNumberRequest, "phoneNumber">
> = core.serialization.object({
    outboundOnly: core.serialization.property(
        "outbound_only",
        core.serialization.lazy(async () => (await import("../../../..")).UpdateNumberRequestOutboundOnly).optional()
    ),
    label: core.serialization.lazy(async () => (await import("../../../..")).UpdateNumberRequestLabel).optional(),
    inboundAgent: core.serialization.property(
        "inbound_agent",
        core.serialization.lazy(async () => (await import("../../../..")).UpdateNumberRequestInboundAgent).optional()
    ),
});

export declare namespace UpdateNumberRequest {
    interface Raw {
        outbound_only?: serializers.UpdateNumberRequestOutboundOnly.Raw | null;
        label?: serializers.UpdateNumberRequestLabel.Raw | null;
        inbound_agent?: serializers.UpdateNumberRequestInboundAgent.Raw | null;
    }
}

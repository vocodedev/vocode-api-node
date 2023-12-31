/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const AgentUpdateParamsWebhook: core.serialization.Schema<
    serializers.AgentUpdateParamsWebhook.Raw,
    Vocode.AgentUpdateParamsWebhook
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("..")).WebhookUpdateParams),
    core.serialization.lazyObject(async () => (await import("..")).Undefined),
]);

export declare namespace AgentUpdateParamsWebhook {
    type Raw = string | serializers.WebhookUpdateParams.Raw | serializers.Undefined.Raw;
}

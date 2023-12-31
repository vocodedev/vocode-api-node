/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const WebhookUpdateParamsMethod: core.serialization.Schema<
    serializers.WebhookUpdateParamsMethod.Raw,
    Vocode.WebhookUpdateParamsMethod
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("..")).HttpMethod),
    core.serialization.lazyObject(async () => (await import("..")).Undefined),
]);

export declare namespace WebhookUpdateParamsMethod {
    type Raw = serializers.HttpMethod.Raw | serializers.Undefined.Raw;
}

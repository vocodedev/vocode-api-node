/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const WebhookUpdateParamsUrl: core.serialization.Schema<
    serializers.WebhookUpdateParamsUrl.Raw,
    Vocode.WebhookUpdateParamsUrl
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("..")).Undefined),
]);

export declare namespace WebhookUpdateParamsUrl {
    type Raw = string | serializers.Undefined.Raw;
}

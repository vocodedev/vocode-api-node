/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const AgentUpdateParamsActionsItem: core.serialization.Schema<
    serializers.AgentUpdateParamsActionsItem.Raw,
    Vocode.AgentUpdateParamsActionsItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazy(async () => (await import("..")).AgentUpdateParamsActionsItemOne),
]);

export declare namespace AgentUpdateParamsActionsItem {
    type Raw = string | serializers.AgentUpdateParamsActionsItemOne.Raw;
}
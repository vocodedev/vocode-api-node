/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Vocode from "../../../../api";
import * as core from "../../../../core";

export const AgentParamsActionsItem: core.serialization.Schema<
    serializers.AgentParamsActionsItem.Raw,
    Vocode.AgentParamsActionsItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazy(async () => (await import("../../..")).AgentParamsActionsItemOne),
]);

export declare namespace AgentParamsActionsItem {
    type Raw = string | serializers.AgentParamsActionsItemOne.Raw;
}

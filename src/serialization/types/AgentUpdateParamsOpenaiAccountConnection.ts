/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const AgentUpdateParamsOpenaiAccountConnection: core.serialization.Schema<
    serializers.AgentUpdateParamsOpenaiAccountConnection.Raw,
    Vocode.AgentUpdateParamsOpenaiAccountConnection
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).OpenAiAccountConnection),
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("..")).Undefined),
]);

export declare namespace AgentUpdateParamsOpenaiAccountConnection {
    type Raw = serializers.OpenAiAccountConnection.Raw | string | serializers.Undefined.Raw;
}

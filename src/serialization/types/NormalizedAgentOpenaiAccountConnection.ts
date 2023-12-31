/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const NormalizedAgentOpenaiAccountConnection: core.serialization.Schema<
    serializers.NormalizedAgentOpenaiAccountConnection.Raw,
    Vocode.NormalizedAgentOpenaiAccountConnection
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).OpenAiAccountConnection),
    core.serialization.string(),
]);

export declare namespace NormalizedAgentOpenaiAccountConnection {
    type Raw = serializers.OpenAiAccountConnection.Raw | string;
}

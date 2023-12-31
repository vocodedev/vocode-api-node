/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const OpenAiAccountConnection: core.serialization.ObjectSchema<
    serializers.OpenAiAccountConnection.Raw,
    Vocode.OpenAiAccountConnection
> = core.serialization.object({
    id: core.serialization.string(),
    userId: core.serialization.property("user_id", core.serialization.string()),
    credentials: core.serialization.lazyObject(async () => (await import("..")).OpenAiCredentials),
});

export declare namespace OpenAiAccountConnection {
    interface Raw {
        id: string;
        user_id: string;
        credentials: serializers.OpenAiCredentials.Raw;
    }
}

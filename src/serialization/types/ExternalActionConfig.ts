/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const ExternalActionConfig: core.serialization.ObjectSchema<
    serializers.ExternalActionConfig.Raw,
    Vocode.ExternalActionConfig
> = core.serialization.object({
    processingMode: core.serialization.property(
        "processing_mode",
        core.serialization.stringLiteral("muted").optional()
    ),
    name: core.serialization.string(),
    description: core.serialization.string(),
    url: core.serialization.string(),
    inputSchema: core.serialization.property(
        "input_schema",
        core.serialization.record(core.serialization.string(), core.serialization.unknown())
    ),
    speakOnSend: core.serialization.property("speak_on_send", core.serialization.boolean()),
    speakOnReceive: core.serialization.property("speak_on_receive", core.serialization.boolean()),
});

export declare namespace ExternalActionConfig {
    interface Raw {
        processing_mode?: "muted" | null;
        name: string;
        description: string;
        url: string;
        input_schema: Record<string, unknown>;
        speak_on_send: boolean;
        speak_on_receive: boolean;
    }
}

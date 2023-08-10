/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "../../../..";

export interface AgentParams {
    prompt: string;
    language?: Vocode.Language;
    actions?: Vocode.AgentParamsActionsItem[];
    voice: Vocode.AgentParamsVoice;
    initialMessage?: string;
    webhook?: Vocode.AgentParamsWebhook;
    vectorDatabase?: Vocode.AgentParamsVectorDatabase;
    interruptSensitivity?: Vocode.InterruptSensitivity;
}
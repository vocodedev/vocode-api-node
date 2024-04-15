/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const Agent: core.serialization.ObjectSchema<serializers.Agent.Raw, Vocode.Agent> = core.serialization.object({
    id: core.serialization.string(),
    userId: core.serialization.property("user_id", core.serialization.string()),
    name: core.serialization.string().optional(),
    prompt: core.serialization.lazyObject(async () => (await import("..")).Prompt),
    language: core.serialization.lazy(async () => (await import("..")).Language).optional(),
    actions: core.serialization.list(core.serialization.lazy(async () => (await import("..")).AgentActionsItem)),
    voice: core.serialization.lazy(async () => (await import("..")).AgentVoice),
    initialMessage: core.serialization.property("initial_message", core.serialization.string().optional()),
    webhook: core.serialization.lazyObject(async () => (await import("..")).Webhook).optional(),
    vectorDatabase: core.serialization.property(
        "vector_database",
        core.serialization.lazyObject(async () => (await import("..")).PineconeVectorDatabase).optional()
    ),
    interruptSensitivity: core.serialization.property(
        "interrupt_sensitivity",
        core.serialization.lazy(async () => (await import("..")).InterruptSensitivity).optional()
    ),
    contextEndpoint: core.serialization.property("context_endpoint", core.serialization.string().optional()),
    noiseSuppression: core.serialization.property("noise_suppression", core.serialization.boolean().optional()),
    endpointingSensitivity: core.serialization.property(
        "endpointing_sensitivity",
        core.serialization.lazy(async () => (await import("..")).AgentEndpointingSensitivity).optional()
    ),
    ivrNavigationMode: core.serialization.property(
        "ivr_navigation_mode",
        core.serialization.lazy(async () => (await import("..")).AgentIvrNavigationMode).optional()
    ),
    conversationSpeed: core.serialization.property("conversation_speed", core.serialization.number().optional()),
    initialMessageDelay: core.serialization.property("initial_message_delay", core.serialization.number().optional()),
    openaiModelNameOverride: core.serialization.property(
        "openai_model_name_override",
        core.serialization.string().optional()
    ),
    askIfHumanPresentOnIdle: core.serialization.property(
        "ask_if_human_present_on_idle",
        core.serialization.boolean().optional()
    ),
    openaiAccountConnection: core.serialization.property(
        "openai_account_connection",
        core.serialization.lazyObject(async () => (await import("..")).OpenAiAccountConnection).optional()
    ),
    runDoNotCallDetection: core.serialization.property(
        "run_do_not_call_detection",
        core.serialization.boolean().optional()
    ),
    llmTemperature: core.serialization.property("llm_temperature", core.serialization.number().optional()),
});

export declare namespace Agent {
    interface Raw {
        id: string;
        user_id: string;
        name?: string | null;
        prompt: serializers.Prompt.Raw;
        language?: serializers.Language.Raw | null;
        actions: serializers.AgentActionsItem.Raw[];
        voice: serializers.AgentVoice.Raw;
        initial_message?: string | null;
        webhook?: serializers.Webhook.Raw | null;
        vector_database?: serializers.PineconeVectorDatabase.Raw | null;
        interrupt_sensitivity?: serializers.InterruptSensitivity.Raw | null;
        context_endpoint?: string | null;
        noise_suppression?: boolean | null;
        endpointing_sensitivity?: serializers.AgentEndpointingSensitivity.Raw | null;
        ivr_navigation_mode?: serializers.AgentIvrNavigationMode.Raw | null;
        conversation_speed?: number | null;
        initial_message_delay?: number | null;
        openai_model_name_override?: string | null;
        ask_if_human_present_on_idle?: boolean | null;
        openai_account_connection?: serializers.OpenAiAccountConnection.Raw | null;
        run_do_not_call_detection?: boolean | null;
        llm_temperature?: number | null;
    }
}

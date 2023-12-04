/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "..";

export interface NormalizedAgent {
    id: string;
    userId: string;
    prompt: Vocode.NormalizedAgentPrompt;
    language?: Vocode.Language;
    actions: string[];
    voice: string;
    initialMessage?: string;
    webhook?: string;
    vectorDatabase?: Vocode.NormalizedAgentVectorDatabase;
    interruptSensitivity?: Vocode.InterruptSensitivity;
    contextEndpoint?: string;
    noiseSuppression?: boolean;
    endpointingSensitivity?: Vocode.NormalizedAgentEndpointingSensitivity;
    ivrNavigationMode?: Vocode.NormalizedAgentIvrNavigationMode;
    conversationSpeed?: number;
    initialMessageDelay?: number;
    openaiModelNameOverride?: string;
    openaiAccountConnection?: Vocode.NormalizedAgentOpenaiAccountConnection;
    runDoNotCallDetection?: boolean;
}

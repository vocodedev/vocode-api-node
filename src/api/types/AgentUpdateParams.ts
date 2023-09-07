/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "..";

export interface AgentUpdateParams {
    prompt?: Vocode.AgentUpdateParamsPrompt;
    language?: Vocode.AgentUpdateParamsLanguage;
    actions?: Vocode.AgentUpdateParamsActions;
    voice?: Vocode.AgentUpdateParamsVoice;
    initialMessage?: Vocode.AgentUpdateParamsInitialMessage;
    webhook?: Vocode.AgentUpdateParamsWebhook;
    vectorDatabase?: Vocode.AgentUpdateParamsVectorDatabase;
    interruptSensitivity?: Vocode.AgentUpdateParamsInterruptSensitivity;
    contextEndpoint?: Vocode.AgentUpdateParamsContextEndpoint;
    noiseSuppression?: Vocode.AgentUpdateParamsNoiseSuppression;
    endpointingSensitivity?: Vocode.AgentUpdateParamsEndpointingSensitivity;
    ivrNavigationMode?: Vocode.AgentUpdateParamsIvrNavigationMode;
}

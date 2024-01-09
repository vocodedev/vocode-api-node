/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "..";

export type AddToConferenceActionActionTrigger =
    | Vocode.AddToConferenceActionActionTrigger.ActionTriggerFunctionCall
    | Vocode.AddToConferenceActionActionTrigger.ActionTriggerPhraseBased;

export declare namespace AddToConferenceActionActionTrigger {
    interface ActionTriggerFunctionCall extends Vocode.FunctionCallActionTrigger {
        type: "action_trigger_function_call";
    }

    interface ActionTriggerPhraseBased extends Vocode.PhraseBasedActionTrigger {
        type: "action_trigger_phrase_based";
    }
}
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "..";

export type ActionParamsRequest =
    | Vocode.ActionParamsRequest.ActionTransferCall
    | Vocode.ActionParamsRequest.ActionEndConversation
    | Vocode.ActionParamsRequest.ActionDtmf
    | Vocode.ActionParamsRequest.ActionAddToConference
    | Vocode.ActionParamsRequest.ActionSetHold
    | Vocode.ActionParamsRequest.ActionExternal;

export declare namespace ActionParamsRequest {
    interface ActionTransferCall extends Vocode.TransferCallActionParams {
        type: "action_transfer_call";
    }

    interface ActionEndConversation extends Vocode.EndConversationActionParams {
        type: "action_end_conversation";
    }

    interface ActionDtmf extends Vocode.DtmfActionParams {
        type: "action_dtmf";
    }

    interface ActionAddToConference extends Vocode.AddToConferenceActionParams {
        type: "action_add_to_conference";
    }

    interface ActionSetHold extends Vocode.SetHoldActionParams {
        type: "action_set_hold";
    }

    interface ActionExternal extends Vocode.ExternalActionParams {
        type: "action_external";
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const CallStage: core.serialization.Schema<serializers.CallStage.Raw, Vocode.CallStage> =
    core.serialization.enum_(["created", "picked_up", "transfer_started", "transfer_successful"]);

export declare namespace CallStage {
    type Raw = "created" | "picked_up" | "transfer_started" | "transfer_successful";
}
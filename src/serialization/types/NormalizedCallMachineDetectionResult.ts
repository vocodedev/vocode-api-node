/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const NormalizedCallMachineDetectionResult: core.serialization.Schema<
    serializers.NormalizedCallMachineDetectionResult.Raw,
    Vocode.NormalizedCallMachineDetectionResult
> = core.serialization.enum_(["human", "machine"]);

export declare namespace NormalizedCallMachineDetectionResult {
    type Raw = "human" | "machine";
}
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const Call: core.serialization.ObjectSchema<serializers.Call.Raw, Vocode.Call> = core.serialization.object({
    id: core.serialization.string(),
    userId: core.serialization.property("user_id", core.serialization.string()),
    status: core.serialization.lazy(async () => (await import("..")).CallStatus).optional(),
    errorMessage: core.serialization.property("error_message", core.serialization.string().optional()),
    recordingAvailable: core.serialization.property("recording_available", core.serialization.boolean().optional()),
    transcript: core.serialization.string().optional(),
    machineDetectionResult: core.serialization.property(
        "machine_detection_result",
        core.serialization.lazy(async () => (await import("..")).CallMachineDetectionResult).optional()
    ),
    toNumber: core.serialization.property("to_number", core.serialization.string()),
    fromNumber: core.serialization.property("from_number", core.serialization.string()),
    agent: core.serialization.lazyObject(async () => (await import("..")).Agent),
    agentPhoneNumber: core.serialization.property("agent_phone_number", core.serialization.string()),
    startTime: core.serialization.property("start_time", core.serialization.date().optional()),
    endTime: core.serialization.property("end_time", core.serialization.date().optional()),
});

export declare namespace Call {
    interface Raw {
        id: string;
        user_id: string;
        status?: serializers.CallStatus.Raw | null;
        error_message?: string | null;
        recording_available?: boolean | null;
        transcript?: string | null;
        machine_detection_result?: serializers.CallMachineDetectionResult.Raw | null;
        to_number: string;
        from_number: string;
        agent: serializers.Agent.Raw;
        agent_phone_number: string;
        start_time?: string | null;
        end_time?: string | null;
    }
}

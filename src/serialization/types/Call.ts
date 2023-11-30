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
    humanDetectionResult: core.serialization.property(
        "human_detection_result",
        core.serialization.lazy(async () => (await import("..")).CallHumanDetectionResult).optional()
    ),
    doNotCallResult: core.serialization.property("do_not_call_result", core.serialization.boolean().optional()),
    telephonyId: core.serialization.property("telephony_id", core.serialization.string().optional()),
    toNumber: core.serialization.property("to_number", core.serialization.string()),
    fromNumber: core.serialization.property("from_number", core.serialization.string()),
    agent: core.serialization.lazyObject(async () => (await import("..")).Agent),
    telephonyProvider: core.serialization.property(
        "telephony_provider",
        core.serialization.lazy(async () => (await import("..")).CallTelephonyProvider)
    ),
    agentPhoneNumber: core.serialization.property("agent_phone_number", core.serialization.string()),
    startTime: core.serialization.property("start_time", core.serialization.date().optional()),
    endTime: core.serialization.property("end_time", core.serialization.date().optional()),
    hipaaCompliant: core.serialization.property("hipaa_compliant", core.serialization.boolean().optional()),
    onNoHumanAnswer: core.serialization.property(
        "on_no_human_answer",
        core.serialization.lazy(async () => (await import("..")).CallOnNoHumanAnswer).optional()
    ),
    context: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
    runDoNotCallDetection: core.serialization.property(
        "run_do_not_call_detection",
        core.serialization.boolean().optional()
    ),
    telephonyAccountConnection: core.serialization.property(
        "telephony_account_connection",
        core.serialization.lazyObject(async () => (await import("..")).TwilioAccountConnection).optional()
    ),
});

export declare namespace Call {
    interface Raw {
        id: string;
        user_id: string;
        status?: serializers.CallStatus.Raw | null;
        error_message?: string | null;
        recording_available?: boolean | null;
        transcript?: string | null;
        human_detection_result?: serializers.CallHumanDetectionResult.Raw | null;
        do_not_call_result?: boolean | null;
        telephony_id?: string | null;
        to_number: string;
        from_number: string;
        agent: serializers.Agent.Raw;
        telephony_provider: serializers.CallTelephonyProvider.Raw;
        agent_phone_number: string;
        start_time?: string | null;
        end_time?: string | null;
        hipaa_compliant?: boolean | null;
        on_no_human_answer?: serializers.CallOnNoHumanAnswer.Raw | null;
        context?: Record<string, string> | null;
        run_do_not_call_detection?: boolean | null;
        telephony_account_connection?: serializers.TwilioAccountConnection.Raw | null;
    }
}

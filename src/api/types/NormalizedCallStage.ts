/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type NormalizedCallStage = "created" | "picked_up" | "transfer_started" | "transfer_successful";

export const NormalizedCallStage = {
    Created: "created",
    PickedUp: "picked_up",
    TransferStarted: "transfer_started",
    TransferSuccessful: "transfer_successful",
} as const;

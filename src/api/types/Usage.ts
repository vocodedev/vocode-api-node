/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "..";

export interface Usage {
    userId: string;
    planType: Vocode.PlanType;
    monthlyUsageMinutes: number;
    monthlyUsageLimitMinutes?: number;
}

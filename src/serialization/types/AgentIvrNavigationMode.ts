/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const AgentIvrNavigationMode: core.serialization.Schema<
    serializers.AgentIvrNavigationMode.Raw,
    Vocode.AgentIvrNavigationMode
> = core.serialization.enum_(["default", "off"]);

export declare namespace AgentIvrNavigationMode {
    type Raw = "default" | "off";
}

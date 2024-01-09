/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const TwilioAccountConnectionUpdateParamsCredentials: core.serialization.Schema<
    serializers.TwilioAccountConnectionUpdateParamsCredentials.Raw,
    Vocode.TwilioAccountConnectionUpdateParamsCredentials
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).TwilioCredentials),
    core.serialization.lazyObject(async () => (await import("..")).Undefined),
]);

export declare namespace TwilioAccountConnectionUpdateParamsCredentials {
    type Raw = serializers.TwilioCredentials.Raw | serializers.Undefined.Raw;
}
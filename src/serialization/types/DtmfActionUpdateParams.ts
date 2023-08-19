/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const DtmfActionUpdateParams: core.serialization.ObjectSchema<
    serializers.DtmfActionUpdateParams.Raw,
    Vocode.DtmfActionUpdateParams
> = core.serialization.object({
    config: core.serialization.lazy(async () => (await import("..")).DtmfActionUpdateParamsConfig).optional(),
});

export declare namespace DtmfActionUpdateParams {
    interface Raw {
        config?: serializers.DtmfActionUpdateParamsConfig.Raw | null;
    }
}

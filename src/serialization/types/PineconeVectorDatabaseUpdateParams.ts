/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const PineconeVectorDatabaseUpdateParams: core.serialization.ObjectSchema<
    serializers.PineconeVectorDatabaseUpdateParams.Raw,
    Vocode.PineconeVectorDatabaseUpdateParams
> = core.serialization.object({
    type: core.serialization.lazy(async () => (await import("..")).VectorDatabaseType),
    index: core.serialization.lazy(async () => (await import("..")).PineconeVectorDatabaseUpdateParamsIndex).optional(),
    apiKey: core.serialization.property(
        "api_key",
        core.serialization.lazy(async () => (await import("..")).PineconeVectorDatabaseUpdateParamsApiKey).optional()
    ),
    apiEnvironment: core.serialization.property(
        "api_environment",
        core.serialization
            .lazy(async () => (await import("..")).PineconeVectorDatabaseUpdateParamsApiEnvironment)
            .optional()
    ),
});

export declare namespace PineconeVectorDatabaseUpdateParams {
    interface Raw {
        type: serializers.VectorDatabaseType.Raw;
        index?: serializers.PineconeVectorDatabaseUpdateParamsIndex.Raw | null;
        api_key?: serializers.PineconeVectorDatabaseUpdateParamsApiKey.Raw | null;
        api_environment?: serializers.PineconeVectorDatabaseUpdateParamsApiEnvironment.Raw | null;
    }
}
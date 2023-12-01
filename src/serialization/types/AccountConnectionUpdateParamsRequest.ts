/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const AccountConnectionUpdateParamsRequest: core.serialization.Schema<
    serializers.AccountConnectionUpdateParamsRequest.Raw,
    Vocode.AccountConnectionUpdateParamsRequest
> = core.serialization
    .union("type", {
        account_connection_twilio: core.serialization.lazyObject(
            async () => (await import("..")).TwilioAccountConnectionUpdateParams
        ),
        account_connection_openai: core.serialization.lazyObject(
            async () => (await import("..")).OpenAiAccountConnectionUpdateParams
        ),
    })
    .transform<Vocode.AccountConnectionUpdateParamsRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace AccountConnectionUpdateParamsRequest {
    type Raw =
        | AccountConnectionUpdateParamsRequest.AccountConnectionTwilio
        | AccountConnectionUpdateParamsRequest.AccountConnectionOpenai;

    interface AccountConnectionTwilio extends serializers.TwilioAccountConnectionUpdateParams.Raw {
        type: "account_connection_twilio";
    }

    interface AccountConnectionOpenai extends serializers.OpenAiAccountConnectionUpdateParams.Raw {
        type: "account_connection_openai";
    }
}

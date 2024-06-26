/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const VoicePage: core.serialization.ObjectSchema<serializers.VoicePage.Raw, Vocode.VoicePage> =
    core.serialization.object({
        items: core.serialization.list(core.serialization.lazy(async () => (await import("..")).VoicePageItemsItem)),
        page: core.serialization.number(),
        size: core.serialization.number(),
        hasMore: core.serialization.property("has_more", core.serialization.boolean()),
        total: core.serialization.number(),
        totalIsEstimated: core.serialization.property("total_is_estimated", core.serialization.boolean()),
    });

export declare namespace VoicePage {
    interface Raw {
        items: serializers.VoicePageItemsItem.Raw[];
        page: number;
        size: number;
        has_more: boolean;
        total: number;
        total_is_estimated: boolean;
    }
}

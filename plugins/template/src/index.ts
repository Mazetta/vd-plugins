import { findByProps } from "@vendetta/metro";
import { instead } from "@vendetta/patcher";

const unpatch = instead("isYouTabEnabled", findByProps("isYouTabEnabled"), () => true);
export const onUnload = unpatch;

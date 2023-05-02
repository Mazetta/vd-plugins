import { logger } from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad: () => {
        vendetta.metro.findByProps("isYouTabEnabled").isYouTabEnabled = () => true
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
    },
    settings: Settings,
}

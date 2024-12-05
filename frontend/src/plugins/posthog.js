// src/plugins/posthog.js
import posthog from "posthog-js";

export default {
    install(app, options) {
        app.config.globalProperties.$posthog = posthog.init(
            "phc_XitNkmOxFUr7AOKY2mjmThlKnazmlMpCIq5vLKjcAOL",
            {
                api_host: "https://us.i.posthog.com",
            }
        );
    },
};
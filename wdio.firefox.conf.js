import { config } from "./wdio.conf.js";

const firefoxConfig = {
    ...config,
    services: [['selenium-standalone', {firefox: 'latest'}]],
    capabilities: [{
        maxInstances: 2,
        browserName: "firefox",
        'moz:firefoxOptions': {
            args: ['-headless']
        },
    }],

};

exports.config = firefoxConfig;
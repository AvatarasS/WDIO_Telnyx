import { config } from './wdio.conf.js';


const chromeConfig = {
    ...config,
    services: [['selenium-standalone']],
    capabilities: [{
        maxInstances: 2,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: ['--headless',  '--disable-gpu']
        },
    }, ],
    path: "/wd/hub",
};

exports.config = chromeConfig;
const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUXZOiOBT9L3kdeuRbtKqrFkRAafxCBXtrHiIEiEJACCJ2+d+30O7qftiZ7eUplYRzT845974BkuMK2agFwzdQlPgMKeqWtC0QGAKtjiJUAgaEkEIwBGPnIB+PZ9egC8FJuOzCNsuUK62mjw3OWtT+6pzUJOLqVH0GNwYU9T7FwR8APXbNxYeXjaCQy3LqOza2DSfHrimOOfEkCZJm9RoR6Qd38gxuHSLEJSbxuEhQhkqY2qhdQFx+j75oHd2jMrGXStNLMPKu1iFpRR2rJ+XFq3Q15JeOVy9mnuF8j77euHskltRbchpUrkrgDgr3VKg/6uQ8k5O0EaPIGY31l6v4oF/hmKBwEiJCMW2/rXusKYNtaYwv8HVtTIp9pNbC7pKZO1+7JiRvYzjxtBmvvAib7xHPjGJVHLZ65m8ck0iK5PJs0+OyWEwHm9WxmWo9hLJiNjcnX4kvyo+sHP+P7ktbXFxXx15bWJbGrn2jRieTJsWx4tRmPMvgIc8tc70V/G/GhjcnVpa7Z2MQstiLLx7vn3oZlx8q0x4vqqDXiInl7Ii0Cj7pQ1qXf2LpN0oZavp+pOzMJXUilfWn47W6YZcHsTUldSZNL3gQ20nk0r3Tu5TtJlDc3iHuqYTw2NflTUwuvYTv74o0wYTMLqwaP99fdETtJARD7saAEsW4oiWkOCf3PVZkAAzPLgpKRO/yAqLoBjePtbw9RwWiETsx9s2Zmw385KCfTo0X1UIqlH7WOM+AAUWZB6iqUGjhiuZl66CqgjGqwPDvXwwg6EIfxnXlBI4BES4ruiF1keYw/HD14xAGQV4T6rYkGHULVIIh+7mNKMUkrjodawLLIMFnNEogrcAwgmmFbgwI0RkHqMMDkp5L4xdzvrrK1WaK3DG7GCTLjnKSk8cVmd8rirgXn3gBiU+irAyeoBLxT0gSQrgfDPYKEgED8HvPdP/81kJ759mxiaZ+LGns675or1y4GWj82WLvNjy0RyUKwZCWNWLAHgbHuljnR0T+gItZQ+FSatNAYreL6/QqhfBq9KUprb7gPjwFw7fPOTXKww7PtXfuq2VwgAHZPYK4ezkvC31OFlmOldmhzP1V/Ww6IWFR/CSIAgYQ2N0GKcozSLo67yZ0CCGiEKcVGILRXF/1691o/OL24n5ummoQq6NYBZ+mfaT/kS7dRRNzNm2y2KSTsK0Dq1CUDEtGL1iNNDV2vISn29plV+zzv4CAIRCu8tpnj4V65vKFMqtVI7qG/XVBBlrd6GTjBudDWBykH2ikeyclzmyD39qvfcnlV3zuu1SOWzzT5sToj9T6RUJhtFGXz121R3i+FosG6xfPmPtBf3uC84s3ONtiK2C73U70XJ+v1gH01ksuVo9CxNf9Hwu82PlGbM59WVbgSu81p1yYCalJZVlbzCLtlK519dGX97mQvs9jfO+Yt/eoRRjdx9u7Cf9p1mfq2RvzBeN9YP4mWdqSJVg7uME010rXCkqiydFimterSBgv4+VEN/Kw3O6PdByC2+0XA4oU0igvMzAEVbaHgAEprKj62bVrnKGKwqwAQ64v8AIrKoLEgKxVi8KlkH40O1C7zxFjcPsHYs/ilQgIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE : process.env.ANTIDELETE || 'yes',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});


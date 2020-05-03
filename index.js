'use strict';

const nf = require('node-fetch');
const fc = require('fetch-cookie')(nf);
const ru = require('random-useragent');

const unshort = (uri) => {
    return new Promise(async (resolve, reject) => {
        let request;
        try {
            request = await fc(uri, {
                method: 'GET',
                headers: {
                    'User-Agent': ru.getRandom(),
                    'Cache-Control': 'private',
                    Accept: 'application/xml,application/xhtml+xml,text/html;q=0.9, text/plain;q=0.8,image/png,*/*;q=0.5'
                }
            });
        }
        catch {}
        console.log((request && request.status) || 'pato');
        if (request && (request.status == 301 || request.status == 302 || request.status == 200))
            resolve(request.url);
        else 
            reject(new Error("Request is null"))
    });
};

/**
 * Return resolved uri from shorted one.
 * @param {string} uri
 * @return {string}
 */
module.exports = unshort;
const webdriverio = require('webdriverio');
const cheerio = require('cheerio');
const _ = require('lodash');
const options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

function getFacebookInfo(id) {
    const driver = webdriverio
        .remote(options)
        .init();

    return driver
        .url(`https://www.facebook.com/${id}`)
        .getHTML('html').then((html) => {

            const $ = cheerio.load(html);
            const businessInfo = {
                name: $('._2wma').text(),
                description: $('._2pi3').text(),
                reviewCount: parseInt($('._3-9a._1cp8._50f8._50f5').text().replace(/[^0-9]/gm, ''))
            };

            const logoMappings = {
                'address': 'OaDhnoQl6Wn.png',
                'phone': 'YSL1wrSzqnj.png',
                'website': 'DBKS7EwfJFi.png',
                'category': 'sGeiH4lcJjq.png',
                'hours': 'Fgx-KyDov6X.png'
            };

            _.each(logoMappings, (value, key) => {
                businessInfo[key] = $(`._4bl7 img[src*="${value}"]`).closest('._ikh').find('._4bl9').text();
            });

            driver.end();
            return businessInfo;
        });
}

module.exports.getFacebookInfo = getFacebookInfo;
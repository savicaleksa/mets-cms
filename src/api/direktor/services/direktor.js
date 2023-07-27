'use strict';

/**
 * direktor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::direktor.direktor');

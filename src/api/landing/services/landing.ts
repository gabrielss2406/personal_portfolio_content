/**
 * landing service
 */
import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::landing.landing', ({ strapi }) => ({
  async find(params = {}) {
    const { results, pagination } = await super.find({
      ...params,
      populate: {
        components: {
          on: {
            'landing.project-section': {
              populate: {
                projects: {
                  populate: {
                    image: true
                  }
                }
              }
            },
            'landing.experience-section': {
              populate: '*',
            },
            'landing.contact-section': {
              populate: '*',
            },
            'landing.activities-section': {
              populate: '*',
            },
          }
        }
      }
    });
    
    return { results, pagination };
  },
}));
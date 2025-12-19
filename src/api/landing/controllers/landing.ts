import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::landing.landing', ({ strapi }: { strapi: any }) => ({
  async findByPage(ctx: any) {
    const { page } = ctx.params;
    
    ctx.query = {
      ...ctx.query,
      filters: {
        page: { $eq: page }
      },
      pagination: {
        limit: 1
      }
    };

    const { results } = await strapi.service('api::landing.landing').find(ctx.query);

    if (!results || results.length === 0) {
      return ctx.notFound('Landing page not found');
    }

    const item = results[0];
    const transformed: {[key: string]: any} = {
      id: item.id,
      documentId: item.documentId,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      publishedAt: item.publishedAt,
      locale: item.locale,
      page: item.page
    };

    item.components?.forEach((component: any) => {
      const { __component, id, ...rest } = component;
      // Map the array data to the root based on existing naming convention
      const dataKey = Object.keys(rest).find(key => Array.isArray(rest[key]));
      if (dataKey) {
        transformed[dataKey] = rest[dataKey];
      } else {
        // Fallback: merge everything if no array is found
        Object.assign(transformed, rest);
      }
    });

    return {
      data: transformed,
      meta: {}
    };
  }
}));
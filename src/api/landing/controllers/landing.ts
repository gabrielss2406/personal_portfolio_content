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

    const { data } = await super.find(ctx);

    if (!data || data.length === 0) {
      return ctx.notFound('Landing page not found');
    }

    const item = data[0];
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
      const dataKey = Object.keys(component).find(key => 
        Array.isArray(component[key]) && key !== '__component'
      );
      
      if (dataKey) {
        transformed[dataKey] = component[dataKey];
      }
    });

    return {
      data: transformed,
      meta: {}
    };
  }
}));
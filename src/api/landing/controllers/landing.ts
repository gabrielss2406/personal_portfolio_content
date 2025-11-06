'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::landing.landing', ({ strapi }) => ({
  async find(ctx) {
    const { data } = await super.find(ctx);

    const transformedData = data.map(item => {
      const transformed = {
        id: item.id,
        documentId: item.documentId,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        publishedAt: item.publishedAt,
        locale: item.locale,
        page: item.page
      };

      // Extrair dinamicamente todos os componentes
      item.components?.forEach(component => {
        const componentType = component.__component.split('.')[1]; // 'project-section' -> 'projects'
        
        // Pegar a chave principal do componente (projects, experiences, contacts, etc)
        const dataKey = Object.keys(component).find(key => 
          Array.isArray(component[key]) && key !== '__component'
        );
        
        if (dataKey) {
          transformed[dataKey] = component[dataKey];
        }
      });

      return transformed;
    });

    return {
      data: transformedData,
      meta: ctx.response.body?.meta || {}
    };
  }
}));
import type { Schema, Struct } from '@strapi/strapi';

export interface LandingContactSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_contact_sections';
  info: {
    displayName: 'contact-section';
    icon: 'archive';
  };
  attributes: {
    color: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface LandingExperience extends Struct.ComponentSchema {
  collectionName: 'components_landing_experiences';
  info: {
    displayName: 'experience';
    icon: 'cloud';
  };
  attributes: {
    company: Schema.Attribute.String;
    description: Schema.Attribute.String;
    duration: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LandingExperienceSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_experience_sections';
  info: {
    displayName: 'experience-section';
    icon: 'connector';
  };
  attributes: {
    experiences: Schema.Attribute.Component<'landing.experience', true>;
  };
}

export interface LandingProject extends Struct.ComponentSchema {
  collectionName: 'components_landing_projects';
  info: {
    displayName: 'project';
    icon: 'bulletList';
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    tags: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface LandingProjectSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_project_sections';
  info: {
    displayName: 'project-section';
    icon: 'book';
  };
  attributes: {
    projects: Schema.Attribute.Component<'landing.project', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'landing.contact-section': LandingContactSection;
      'landing.experience': LandingExperience;
      'landing.experience-section': LandingExperienceSection;
      'landing.project': LandingProject;
      'landing.project-section': LandingProjectSection;
    }
  }
}

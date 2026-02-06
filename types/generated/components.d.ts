import type { Schema, Struct } from '@strapi/strapi';

export interface LandingActivitiesSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_activities_sections';
  info: {
    displayName: 'activities-section';
    icon: 'arrowRight';
  };
  attributes: {
    activities: Schema.Attribute.Component<'landing.experience', true>;
  };
}

export interface LandingCertification extends Struct.ComponentSchema {
  collectionName: 'components_landing_certifications';
  info: {
    displayName: 'certification';
    icon: 'quote';
  };
  attributes: {
    date: Schema.Attribute.String;
    issuer: Schema.Attribute.String;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LandingCertificationsSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_certifications_sections';
  info: {
    displayName: 'certifications-section';
    icon: 'bold';
  };
  attributes: {
    certifications: Schema.Attribute.Component<'landing.certification', true>;
  };
}

export interface LandingContact extends Struct.ComponentSchema {
  collectionName: 'components_landing_contacts';
  info: {
    displayName: 'contact';
    icon: 'shoppingCart';
  };
  attributes: {
    color: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface LandingContactSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_contact_sections';
  info: {
    displayName: 'contact-section';
    icon: 'archive';
  };
  attributes: {
    contacts: Schema.Attribute.Component<'landing.contact', true>;
  };
}

export interface LandingEducation extends Struct.ComponentSchema {
  collectionName: 'components_landing_educations';
  info: {
    displayName: 'education';
    icon: 'cloud';
  };
  attributes: {
    degree: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    duration: Schema.Attribute.String;
    institution: Schema.Attribute.String;
  };
}

export interface LandingEducationSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_education_sections';
  info: {
    displayName: 'education-section';
    icon: 'chartPie';
  };
  attributes: {
    educations: Schema.Attribute.Component<'landing.education', true>;
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
    description: Schema.Attribute.Text;
    duration: Schema.Attribute.String;
    tags: Schema.Attribute.JSON;
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
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    project_page: Schema.Attribute.Relation<
      'oneToOne',
      'api::project-page.project-page'
    >;
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

export interface SharedAuthor extends Struct.ComponentSchema {
  collectionName: 'components_shared_authors';
  info: {
    description: '';
    displayName: 'Author';
    icon: 'user';
  };
  attributes: {
    github_url: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'landing.activities-section': LandingActivitiesSection;
      'landing.certification': LandingCertification;
      'landing.certifications-section': LandingCertificationsSection;
      'landing.contact': LandingContact;
      'landing.contact-section': LandingContactSection;
      'landing.education': LandingEducation;
      'landing.education-section': LandingEducationSection;
      'landing.experience': LandingExperience;
      'landing.experience-section': LandingExperienceSection;
      'landing.project': LandingProject;
      'landing.project-section': LandingProjectSection;
      'shared.author': SharedAuthor;
    }
  }
}

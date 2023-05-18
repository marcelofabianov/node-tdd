import { Feature } from '@application/interfaces/entities/Feature';

export interface CreateModuleDto {
  name: string;
  description: string;
  slug: string;
  inactivatedAt?: Date;
  features: Feature[];
}

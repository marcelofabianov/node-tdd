import { Feature } from '@application/interfaces/entities/Feature';

export interface Module {
  name: string;
  description: string;
  slug: string;
  inactivatedAt?: Date;
  features: Feature[];
}

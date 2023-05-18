import { IFeature } from '@application/interfaces/entities/IFeature';

export interface IModule {
  name: string;
  description: string;
  slug: string;
  inactivatedAt?: Date;
  features: IFeature[];
}

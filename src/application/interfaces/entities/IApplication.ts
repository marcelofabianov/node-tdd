import { IModule } from '@application/interfaces/entities/IModule';

export interface IApplication {
  name: string;
  description: string;
  slug: string;
  inactivatedAt?: Date;
  modules: IModule[];
}

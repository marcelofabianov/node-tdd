import { container } from 'tsyringe';

import {
  IApplication,
  IModule,
  IFeature,
} from '@application/interfaces/entities';

import { Application, Module, Feature } from '@application/entities';

container.registerSingleton<IApplication>('IApplication', {
  useClass: Application,
});
container.registerSingleton<IModule>('IModule', { useClass: Module });
container.registerSingleton<IFeature>('IFeature', { useClass: Feature });

import { IFeature } from '@application/interfaces/entities/IFeature';
import { IModule } from '@application/interfaces/entities/IModule';
import { CreateModuleDto } from '@application/dtos/CreateModuleDto';

/* eslint-disable no-unused-vars */
export class Module implements IModule {
  private constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly slug: string,
    public readonly inactivatedAt?: Date,
    public readonly features: IFeature[] = [],
  ) {}

  public static create(dto: CreateModuleDto): Module {
    const { name, description, slug, inactivatedAt, features } = dto;

    return new Module(name, description, slug, inactivatedAt, features);
  }
}

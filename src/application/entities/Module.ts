import { Feature } from '@application/interfaces/entities/Feature';
import { CreateModuleDto } from '@application/dtos/CreateModuleDto';
import { Module as IModule } from '@application/interfaces/entities/Module';

/* eslint-disable no-unused-vars */
export class Module implements IModule {
  private constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly slug: string,
    public readonly inactivatedAt?: Date,
    public readonly features: Feature[] = [],
  ) {}

  public static create(dto: CreateModuleDto): Module {
    const { name, description, slug, inactivatedAt, features } = dto;

    return new Module(name, description, slug, inactivatedAt, features);
  }
}

import { CreateApplicationDto } from '@application/dtos/CreateApplicationDto';
import { IModule } from '@application/interfaces/entities/IModule';
import { IApplication } from '@application/interfaces/entities/IApplication';

/* eslint-disable no-unused-vars */
export class Application implements IApplication {
  private constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly slug: string,
    public readonly inactivatedAt?: Date,
    public readonly modules: IModule[] = [],
  ) {}

  public static create(dto: CreateApplicationDto): Application {
    const { name, description, slug, inactivatedAt, modules } = dto;

    return new Application(name, description, slug, inactivatedAt, modules);
  }
}

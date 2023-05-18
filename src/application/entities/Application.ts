import { CreateApplicationDto } from '@application/dtos/CreateApplicationDto';
import { Module } from '@application/interfaces/entities/Module';
import { Application as IApplication } from '@application/interfaces/entities/Application';

/* eslint-disable no-unused-vars */
export class Application implements IApplication {
  private constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly slug: string,
    public readonly inactivatedAt?: Date,
    public readonly modules: Module[] = [],
  ) {}

  public static create(dto: CreateApplicationDto): Application {
    const { name, description, slug, inactivatedAt, modules } = dto;

    return new Application(name, description, slug, inactivatedAt, modules);
  }
}

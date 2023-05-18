/* eslint-disable no-unused-vars */
import { CreateApplicationDto } from '@application/dtos/CreateApplicationDto';

export class Application {
  private constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly slug: string,
    public readonly inactivatedAt?: Date,
    public readonly modules: string[] = [],
  ) {}

  public static create(dto: CreateApplicationDto): Application {
    const { name, description, slug, inactivatedAt, modules } = dto;

    return new Application(name, description, slug, inactivatedAt, modules);
  }
}

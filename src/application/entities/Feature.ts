import { CreateFeatureDto } from '@application/dtos/CreateFeatureDto';
import { Feature as IFeature } from '@application/interfaces/entities/Feature';

/* eslint-disable no-unused-vars */
export class Feature implements IFeature {
  private constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly slug: string,
    public readonly inactivatedAt?: Date,
  ) {}

  public static create(dto: CreateFeatureDto): Feature {
    const { name, description, slug, inactivatedAt } = dto;

    return new Feature(name, description, slug, inactivatedAt);
  }
}

export interface CreateFeatureDto {
  name: string;
  description: string;
  slug: string;
  inactivatedAt?: Date;
}

export interface CreateApplicationDto {
  name: string;
  description: string;
  slug: string;
  inactivatedAt?: Date;
  modules: string[];
}

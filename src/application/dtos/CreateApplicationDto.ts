import { Module } from '@application/interfaces/entities/Module';

export interface CreateApplicationDto {
  name: string;
  description: string;
  slug: string;
  inactivatedAt?: Date;
  modules: Module[];
}

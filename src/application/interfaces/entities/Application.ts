import { Module } from '@application/interfaces/entities/Module';

export interface Application {
  name: string;
  description: string;
  slug: string;
  inactivatedAt?: Date;
  modules: Module[];
}

import { faker } from '@faker-js/faker';
import { Module } from '@application/entities/Module';
import { Feature } from '@application/interfaces/entities/Feature';

describe('Module', () => {
  const name = faker.color.human();
  const description = faker.lorem.sentence();
  const slug = faker.lorem.slug();
  const inactivatedAt = faker.date.past();

  const featureMock: Feature = {
    name: faker.lorem.words(2),
    description: faker.lorem.sentence(),
    slug: faker.lorem.slug(),
    inactivatedAt: faker.date.past(),
  };

  const features: Feature[] = [featureMock];

  it('should create an instance of Module', () => {
    const module = Module.create({
      name,
      description,
      slug,
      inactivatedAt,
      features,
    });

    expect(module).toEqual({
      name,
      description,
      slug,
      inactivatedAt,
      features,
    });
  });
});

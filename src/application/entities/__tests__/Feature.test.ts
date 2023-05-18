import { faker } from '@faker-js/faker';
import { Feature } from '@application/entities/Feature';

describe('Feature', () => {
  const name = faker.lorem.words(2);
  const description = faker.lorem.sentence();
  const slug = faker.lorem.slug();
  const inactivatedAt = faker.date.past();

  it('should create an instance of Feature', () => {
    const feature = Feature.create({
      name,
      description,
      slug,
      inactivatedAt,
    });

    expect(feature).toEqual({
      name,
      description,
      slug,
      inactivatedAt,
    });
  });
});

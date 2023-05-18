import { faker } from '@faker-js/faker';
import { Application } from '@application/entities/Application';

describe('Application', () => {
  const name = faker.company.name();
  const description = faker.string.alpha(10);
  const slug = faker.string.alpha(10);
  const inactivatedAt = faker.date.past();
  const modules = ['module1', 'module2'];

  it('should create an instance of Application', () => {
    const application = Application.create({
      name,
      description,
      slug,
      inactivatedAt,
      modules,
    });

    expect(application).toEqual({
      name,
      description,
      slug,
      inactivatedAt,
      modules,
    });
  });
});

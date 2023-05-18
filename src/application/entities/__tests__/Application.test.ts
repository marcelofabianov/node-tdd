import { faker } from '@faker-js/faker';
import { Application } from '@application/entities/Application';
import { IModule } from '@application/interfaces/entities/IModule';

describe('Application', () => {
  const name = faker.company.name();
  const description = faker.string.alpha(10);
  const slug = faker.string.alpha(10);
  const inactivatedAt = faker.date.past();

  const moduleMock: IModule = {
    name: faker.company.name(),
    description: faker.lorem.sentence(),
    slug: faker.lorem.slug(),
    inactivatedAt: faker.date.past(),
    features: [], // Preencha com os dados necessários para o teste
  };

  const modules: IModule[] = [moduleMock];

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

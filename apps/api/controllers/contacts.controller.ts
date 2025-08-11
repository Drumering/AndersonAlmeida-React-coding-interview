import { Get, JsonController, QueryParam } from 'routing-controllers';
import { faker } from '@faker-js/faker';
import { ListResponse, IContact } from 'react-coding-interview-shared/models';

function seedContacts(count: number) {
  const res: IContact[] = [];

  for (let i = 0; i < count; i++) {
    res.push({
      id: faker.database.mongodbObjectId(),
      email: faker.internet.email(),
      name: faker.person.fullName(),
    });
  }

  return res;
}

const contactData = seedContacts(75);

@JsonController('/contacts')
export class ContactsController {
  @Get('/list')
  getContacts(
    @QueryParam('pageNumber') pageNumber = 1,
    @QueryParam('pageSize') pageSize = 10,
  ): ListResponse<IContact> {
    const skip = (pageNumber - 1) * pageSize;
    const take = pageSize;

    console.log(`Controller ${Date.now()}`);

    return {
      data: contactData.slice(skip, skip + take),
      totalCount: contactData.length,
    };
  }
}

import { ListResponse, IContact } from 'react-coding-interview-shared/models';

class ContactsClient {
  private apiUrl = 'http://localhost:4001/api/contacts/list';

  async list(pageNumber = 1, pageSize = 10): Promise<ListResponse<IContact>> {
    const res = await fetch(
      `${this.apiUrl}?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    );

    return res.json();
  }
}

export const contactsClient = new ContactsClient();

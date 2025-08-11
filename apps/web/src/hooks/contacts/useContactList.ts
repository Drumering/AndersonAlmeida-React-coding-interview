import { contactsClient } from '@lib/contactsClient';
import { useEffect, useState } from 'react';
import { IContact, ListResponse } from 'react-coding-interview-shared/models';

type ContactListState = {
  fetching: boolean;
  hasMore: boolean;
  contacts: ListResponse<IContact>;
  currentPage: number;
};

export type ContactListResult = [ContactListState, () => void];

export function useContactList(pageSize = 20): ContactListResult {
  const [state, setState] = useState<ContactListState>({
    fetching: false,
    hasMore: true,
    currentPage: 0,
    contacts: { data: [], totalCount: -1 },
  });

  const fetchNextPage = async () => {
    if (!state.fetching && state.hasMore) {
      const nextPage = state.currentPage + 1;

      setState((s) => ({ ...s, fetching: true }));

      const resp = await contactsClient.list(nextPage, pageSize);
      const newContacts = [...state.contacts.data, ...resp.data];

      setState({
        fetching: false,
        hasMore: resp.totalCount > 0,
        contacts: { data: newContacts, totalCount: resp.totalCount },
        currentPage: nextPage,
      });
    }
  };

  useEffect(() => {
    fetchNextPage();
  }, []);

  return [state, fetchNextPage];
}

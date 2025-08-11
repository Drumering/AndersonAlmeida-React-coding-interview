import { Box, LinearProgress, Typography } from '@mui/material';

import { ContactCard } from '@components/molecules';
import { InfiniteScrollList } from '@components/organisms';
import { useContactList } from '@hooks/contacts/useContactList';
import { useUIContext } from '@hooks/useUIContext';
import { IContact } from 'react-coding-interview-shared/models';

const ListContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 2,
    }}
  >
    {children}
  </Box>
);

export const ContactListPage: React.FC = () => {
  const [{ contacts, hasMore, fetching }, goNextPage] = useContactList();

  const { navbarInteractivePortal, mainScrollElementRef } = useUIContext();

  return (
    <Box p={4} overflow="auto">
      <InfiniteScrollList<IContact>
        items={contacts.data}
        hasMore={hasMore}
        loadMore={goNextPage}
        loading={fetching}
        ListContainer={ListContainer}
        renderItem={(p) => <ContactCard key={p.id} person={p} />}
        scrollProps={{ getScrollParent: () => mainScrollElementRef.current }}
      />

      {navbarInteractivePortal(
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="end"
          pl={8}
        >
          {fetching && <LinearProgress sx={{ width: '100%' }} />}
          {!fetching && (
            <Typography variant="caption">
              Displaying {contacts.data.length} out of {contacts.totalCount}{' '}
              total contacts
            </Typography>
          )}
        </Box>,
      )}
    </Box>
  );
};

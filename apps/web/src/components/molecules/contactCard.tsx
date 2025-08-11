import { Box, Typography, Avatar } from '@mui/material';
import { SystemStyleObject, Theme } from '@mui/system';

import { Card, InlineEdit } from '@components/atoms';
import { IContact } from 'react-coding-interview-shared/models';
import { useState } from 'react';

export interface IContactCardProps {
  person: IContact;
  sx?: SystemStyleObject<Theme>;
}

export const ContactCard: React.FC<IContactCardProps> = ({
  person: { name, email },
  sx,
}) => {
  const [newName, setName] = useState(name);
  const [newEmail, setEmail] = useState(email);
  return (
    <Card sx={sx}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar />
        <Box textAlign="center" mt={2}>
          <Typography variant="subtitle1" lineHeight="1rem">
            <InlineEdit
              value={newName}
              onChange={setName}
              inputProps={{ 'aria-label': 'Name' }}
            />
          </Typography>
          <Typography variant="caption" color="text.secondary">
            <InlineEdit
              value={newEmail}
              onChange={setEmail}
              inputProps={{ 'aria-label': 'Email' }}
              validate={v =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : 'Invalid email address'
              }
            />
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

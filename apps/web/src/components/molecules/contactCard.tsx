import { Box, Typography, Avatar } from '@mui/material';
import { SystemStyleObject, Theme } from '@mui/system';

import { Card } from '@components/atoms';
import { IContact } from 'react-coding-interview-shared/models';

export interface IContactCardProps {
  person: IContact;
  sx?: SystemStyleObject<Theme>;
}

export const ContactCard: React.FC<IContactCardProps> = ({
  person: { name, email },
  sx,
}) => {
  return (
    <Card sx={sx}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar />
        <Box textAlign="center" mt={2}>
          <Typography variant="subtitle1" lineHeight="1rem">
            {name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {email}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

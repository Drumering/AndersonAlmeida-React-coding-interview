import { Box, styled } from '@mui/material';

export const Card = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: '#FFF',
  boxShadow: theme.shadows[2],
  padding: theme.spacing(3),
  borderRadius: 8,
}));

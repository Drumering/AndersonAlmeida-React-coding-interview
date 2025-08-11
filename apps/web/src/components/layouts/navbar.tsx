import { useEffect } from 'react';
import { Box, Divider, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { useUIContext } from '@hooks/useUIContext';
import { useRouteInfo } from '@hooks/useRouteInfo';

const LogoImg = styled('img')(() => ({
  height: '32px',
}));

const Wrapper = styled(Box)(({ theme }) => ({
  position: 'fixed',
  zIndex: 1000,
  background: '#FFF',
  height: '64px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '12px 24px',
  boxShadow: theme.shadows[1],
}));

export const Navbar: React.FC = () => {
  const { navbarInteractiveElementRef, onNavInitialized: _nav_initialize } =
    useUIContext();

  const activeRoute = useRouteInfo();

  useEffect(() => {
    _nav_initialize();
  }, []);

  return (
    <Wrapper>
      <Box display="flex">
        <Box>
          <Link to="/">
            <LogoImg alt="logo" src={`${process.env.PUBLIC_URL}/logo.svg`} />
          </Link>
        </Box>
        <Box px={2}>
          <Divider orientation="vertical" />
        </Box>
        {activeRoute && (
          <Typography
            component="div"
            variant="h6"
            display="flex"
            alignItems="center"
          >
            {activeRoute.Icon && (
              <activeRoute.Icon
                fontSize="inherit"
                color="action"
                sx={{ mr: 0.5 }}
              />
            )}

            {activeRoute.title}
          </Typography>
        )}
      </Box>

      <Box height="100%" flexGrow={1} ref={navbarInteractiveElementRef} />
    </Wrapper>
  );
};

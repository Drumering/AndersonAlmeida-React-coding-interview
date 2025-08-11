import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
  Outlet,
} from 'react-router-dom';

import { UIProvider } from '@contexts/uiContext';
import { routeDefinitions } from '@lib/routes';

import { MainLayout } from '@components/layouts';
import { ContactListPage } from '@components/pages';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/contacts" />,
      },
      {
        path: '/contacts',
        element: <Outlet />,
        children: [
          {
            path: '/contacts',
            element: <ContactListPage />,
            id: routeDefinitions.contactsList.id,
          },
          {
            path: '/contacts/delete/:id',
            element: <div>Not implemented</div>,
            id: routeDefinitions.contactDelete.id,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <UIProvider>
      <RouterProvider router={appRouter} />
    </UIProvider>
  );
}

export default App;

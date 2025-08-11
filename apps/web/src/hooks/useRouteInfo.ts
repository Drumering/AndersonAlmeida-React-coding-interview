import { useMemo } from 'react';
import { useMatches } from 'react-router-dom';

import { IRouteInfo, routeDefinitions } from '@lib/routes';

export function useRouteInfo() {
  const routeMatches = useMatches();

  const routeDefMap = useMemo<Record<string, IRouteInfo>>(() => {
    return Object.keys(routeDefinitions).reduce((acc, curr) => {
      return {
        ...acc,
        [curr]: routeDefinitions[curr],
      };
    }, {} as Record<string, IRouteInfo>);
  }, []);

  const activeRouteData = useMemo(() => {
    for (let i = routeMatches.length - 1; i >= 0; i--) {
      if (routeDefMap[routeMatches[i].id]) {
        return routeDefMap[routeMatches[i].id];
      }
    }
  }, [routeMatches]);

  return activeRouteData || ({} as IRouteInfo);
}

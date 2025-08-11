import {
  EmojiPeople,
  SupervisedUserCircleRounded,
  SvgIconComponent,
} from '@mui/icons-material';

export interface IRouteInfo {
  id: string;
  title: string;
  Icon?: SvgIconComponent;
}

export const routeDefinitions: Record<string, IRouteInfo> = {
  contactsList: {
    id: 'contactsList',
    title: 'Contacts',
    Icon: SupervisedUserCircleRounded,
  },
  contactDelete: {
    id: 'contactDelete',
    title: 'Contact delete confirmation',
    Icon: EmojiPeople,
  },
};

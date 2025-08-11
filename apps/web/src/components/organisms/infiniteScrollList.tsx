import { Box } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroller';

export interface IInfiniteScrollListProps<T> {
  items: T[];
  hasMore: boolean;
  loadMore(): void;
  loading: boolean;
  ListContainer?: React.ComponentType<{ children: React.ReactNode }>;
  renderItem(item: T, idx: number): React.ReactNode;
  scrollProps?: Pick<
    InfiniteScroll['props'],
    'element' | 'loader' | 'getScrollParent'
  >;
}

export function InfiniteScrollList<T>(props: IInfiniteScrollListProps<T>) {
  const {
    items,
    renderItem,
    hasMore,
    loadMore,
    ListContainer = Box,
    loading,
    scrollProps,
  } = props;

  function fetchMore() {
    if (!loading && hasMore) {
      loadMore();
    }
  }

  return (
    <InfiniteScroll
      hasMore={hasMore}
      loadMore={fetchMore}
      useWindow={false}
      threshold={10}
      {...scrollProps}
    >
      <ListContainer>{items.map(renderItem)}</ListContainer>
    </InfiniteScroll>
  );
}

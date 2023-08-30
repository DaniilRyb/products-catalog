import React, { Dispatch, FC, Fragment } from 'react';
import {
  AllLeft,
  AllRight,
  Container,
  Left,
  Page,
  PageContainer,
  PageInfo,
  Right,
} from './styles';
import Select from 'react-select';

interface PProps {
  limit: number;
  skip: number;
  total?: number;
  setLimit: Dispatch<React.SetStateAction<number>>;
  setOffset: Dispatch<React.SetStateAction<number>>;
}

const PaginationComponent: FC<PProps> = ({
  limit,
  skip,
  total,
  setLimit,
  setOffset,
}) => {
  if (typeof total !== 'number') {
    return <Container>Loading...</Container>;
  }

  const limitOptions = [2, 5, 10, 12, 15, 20].map((value) => ({
    value,
    label: `${value} per page`,
  }));
  const from = Math.min(skip + 1, total);
  const to = Math.min(skip + limit, total);
  const pageCount = Math.ceil(total / limit);
  const currentPage = skip / limit + 1;
  const highestPossibleOffset = limit * (pageCount - 1);
  const pageArray = [-2, -1, 0, 1, 2]
    .map((v) => currentPage + v)
    .filter((page) => page > 0 && page <= pageCount);

  return (
    <Container>
      <PageInfo>
        Showing {from} to {to} of {total} products
        <Select
          options={limitOptions}
          value={limitOptions.find((v) => v.value === limit)}
          onChange={(v) => {
            setLimit(v?.value || 12);
            setOffset(0);
          }}
        />
      </PageInfo>
      {total > 0 && (
        <PageContainer>
          <Left onClick={() => setOffset(0)} />
          <AllLeft
            onClick={() => setOffset((prev) => Math.max(prev - limit, 0))}
          />
          {!pageArray.includes(1) && (
            <Fragment>
              <Page
                isActive={currentPage === 1}
                onClick={() => {
                  setOffset(0);
                }}
              >
                1
              </Page>
              <div>...</div>
            </Fragment>
          )}
          {pageArray.map((page) => {
            return (
              <Page
                isActive={page === currentPage}
                onClick={() => {
                  setOffset(limit * (page - 1));
                }}
              >
                {page}
              </Page>
            );
          })}
          {!pageArray.includes(pageCount) && (
            <Fragment>
              <div>...</div>
              <Page
                isActive={currentPage === pageCount}
                onClick={() => {
                  setOffset(highestPossibleOffset);
                }}
              >
                {pageCount}
              </Page>
            </Fragment>
          )}
          <AllRight
            onClick={() =>
              setOffset((prev) => Math.min(prev + limit, highestPossibleOffset))
            }
          />
          <Right onClick={() => setOffset(highestPossibleOffset)} />
        </PageContainer>
      )}
    </Container>
  );
};
export default PaginationComponent;

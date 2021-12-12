import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../data/GlobalContext";
import { ChannelType } from "../../data/types";
import { Card } from "../Card/Card";
import { StyledPagination } from "./Pagination.styles";

type PaginationPropsType = {
  channels: ChannelType[];
  pageLimit: number;
  channelsLimit: number;
};

// TODO: add page limits
// TODO: disable buttons when on that page
export const Pagination = ({
  channels,
  pageLimit,
  channelsLimit,
}: PaginationPropsType) => {
  const { dataLength } = useContext(GlobalContext);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationGroup, setPaginationGroup] = useState<number[]>([]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event: any) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * channelsLimit - channelsLimit;
    const endIndex = startIndex + channelsLimit;
    return channels.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    const array = Array(pages)
      .fill("")
      .map((_, idx) => start + idx + 1);
    console.log(array);
    setPaginationGroup(array);
  };

  useEffect(() => {
    setPages(Math.ceil(dataLength / channelsLimit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getPaginationGroup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages]);

  return (
    <StyledPagination>
      <ul>
        {channels &&
          getPaginatedData().map((channel, idx) => (
            <Card channel={channel} key={idx} />
          ))}
      </ul>
      <div>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          PREV
        </button>
        <button onClick={goToNextPage} disabled={currentPage === pages}>
          NEXT
        </button>
        {paginationGroup.map((item, index) => (
          <button key={index} onClick={changePage}>
            <span>{item}</span>
          </button>
        ))}
      </div>
    </StyledPagination>
  );
};
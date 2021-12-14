import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../data/GlobalContext";
import { ChannelType } from "../../data/types";
import { theme } from "../../styles/theme";
import { Card } from "../Card/Card";
import {
  StyledList,
  StyledNavigationButton,
  StyledNumberButton,
  StyledPagination,
} from "./Pagination.styles";

type PaginationPropsType = {
  channels: ChannelType[];
  channelsLimit: number;
};

export const Pagination = ({
  channels,
  channelsLimit,
}: PaginationPropsType) => {
  const { dataLength, resultsLength } = useContext(GlobalContext);
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

  useEffect(() => {
    setPages(Math.ceil(dataLength / channelsLimit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataLength]);

  useEffect(() => {
    getPaginationGroup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages]);

  const getPaginationGroup = () => {
    const array = Array(pages)
      .fill("")
      .map((_, idx) => idx + 1);
    setPaginationGroup(array);
  };

  return (
    <StyledPagination>
      {/* NOTE: could include table headers for newbies */}
      <StyledList>
        {channels &&
          getPaginatedData().map((channel, idx) => (
            <Card channel={channel} key={idx} />
          ))}
      </StyledList>
      <div>
        <StyledNavigationButton
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          PREV
        </StyledNavigationButton>
        {/* IMPROVE: couldn't work out in a reaosnable timeframe how to get pagination numbers to dynamically change. */}
        {!resultsLength &&
          paginationGroup.map((number, index) => (
            <StyledNumberButton
              key={index}
              onClick={changePage}
              disabled={number === currentPage}
              $bgColor={theme.blue}
            >
              {number}
            </StyledNumberButton>
          ))}
        <StyledNavigationButton
          onClick={goToNextPage}
          disabled={currentPage === pages}
        >
          NEXT
        </StyledNavigationButton>
      </div>
    </StyledPagination>
  );
};

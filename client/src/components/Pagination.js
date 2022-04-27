import React, { useState } from 'react';
import { TablePagination } from '@mui/material';

const Pagination = ({length, rowsPerPage, setRowsPerPage}) => {
  const [page, setPage] = useState(0);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 2));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={length}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}

export default Pagination
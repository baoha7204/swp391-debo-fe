import { useState } from "react";

export type TableControl = { page: number; rowsPerPage: number };

const useTableControl = ({ page, rowsPerPage }: TableControl) => {
  const [controller, setController] = useState({
    page,
    rowsPerPage,
  });

  const handlePageChange = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setController({
      ...controller,
      page: newPage,
    });
  };

  const handleChangeRowsPerPage: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setController({
      ...controller,
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0,
    });
  };

  return [controller, handlePageChange, handleChangeRowsPerPage] as const;
};

export default useTableControl;

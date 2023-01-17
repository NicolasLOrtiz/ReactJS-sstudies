import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {
  CellClickedEvent,
  ColDef,
  ValueFormatterParams,
} from "ag-grid-community";
import { Spin } from "antd";

interface ICar {
  make: string;
  model: string;
  price: number;
}

type MyRendererProps = {
  valueFormatted: string;
};

function MyRenderer({ valueFormatted }: MyRendererProps) {
  return (
    <span>
      <Spin />
      {valueFormatted}
    </span>
  );
}

const Home = () => {
  const gridRef = useRef<AgGridReact<ICar>>(null);
  const [rowData, setRowData] = useState<ICar[]>([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);

  const [columnDefs] = useState<ColDef[]>([
    { field: "make", sortable: true, filter: true },
    { field: "model", sortable: true, filter: true },
    {
      field: "price",
      valueFormatter: (params: ValueFormatterParams<ICar, number>) => {
        return "£" + params.value;
      },
      sortable: true,
      filter: true,
      cellRenderer: MyRenderer,
    },
  ]);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  const cellClickedListener = useCallback((event: CellClickedEvent) => {
    console.log("cellClicked", typeof event);
  }, []);

  const buttonListener = useCallback(() => {
    // gridRef.current.api.deselectAll();
  }, []);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  return (
    <>
      <button onClick={buttonListener}>Push Me</button>
      <div className="ag-theme-alpine" style={{ height: 500, width: 600 }}>
        <AgGridReact<ICar>
          onCellClicked={cellClickedListener}
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows
          rowSelection="multiple"
        />
      </div>
    </>
  );
};

export default Home;

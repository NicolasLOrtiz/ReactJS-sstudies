import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {
  CellClickedEvent,
  ColDef,
  ValueFormatterParams,
} from "ag-grid-community";
import { Button, Space, Spin } from "antd";
import { CloseOutlined } from "@ant-design/icons";

interface ICar {
  make: string;
  model: string;
  price: number;
}

type CustomCellProps = {
  valueFormatted: string;
};

const CustomCell = ({ valueFormatted }: CustomCellProps) => {
  return (
    <span>
      <Spin />
      {valueFormatted}
    </span>
  );
};

const DeleteButton = () => (
  <Button danger shape="circle" icon={<CloseOutlined />} />
);

const Home = () => {
  const gridRef = useRef<AgGridReact<ICar>>(null);
  const [rowData, setRowData] = useState<ICar[]>([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);

  const columnDefs = useMemo<ColDef[]>(
    () => [
      { field: "make", width: 350, editable: true },
      { field: "model", width: 350, editable: true },
      {
        field: "price",
        valueFormatter: (params: ValueFormatterParams<ICar, number>) => {
          return "£" + params.value;
        },
        sortable: true,
        filter: true,
        cellRenderer: memo(CustomCell),
        width: 300,
      },
      {
        field: "action",
        width: 180,
        cellRenderer: memo(DeleteButton),
      },
    ],
    []
  );

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

  return (
    <Space
      direction="vertical"
      size="large"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      {/*<button onClick={buttonListener}>Push Me</button>*/}
      <div className="ag-theme-alpine" style={{ height: 600, width: 1200 }}>
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

      <Space>
        <Button>Validate</Button>
        <Button type="primary">Save</Button>
      </Space>
    </Space>
  );
};

export default Home;

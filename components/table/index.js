"use client";
import { useEffect, useMemo, useState } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import classNames from "classnames";
import ArrowDown from "@/icons/ArrowDown";
import ArrowUp from "@/icons/ArrowUp";
import { useStateContext } from "@/context/context";
import { useRouter } from "next/navigation";
import Dropdown from "./dropdown";
import { SquareIcon } from "@/icons/ManageUser";

export function Products({ data ,dropdown}) {
  const [products, setProducts] = useState([]);
  const { setEdit, setEditData } = useStateContext();
  const navigate = useRouter();

  const productsData = useMemo(
    () =>
      products?.length > 0
        ? products?.map((product) => {
            return product;
          })
        : [],
    [products]
  );

  const productsColumns = useMemo(
    () =>
      products[0]
        ? Object.keys(products[0])
            .filter((key) => {
              return key !== "userId";
            })
            .map((key) => {
              if (key === "createdAt") {
                return {
                  Header: "date",
                  accessor: key,
                  Cell: ({ value }) =>
                    value.length >= 20 ? `${value.slice(0, 20)}...` : value,
                };
              }
              return { Header: key, accessor: key };
            })
        : [],
    [products]
  );

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [...columns]);
  };
  const tableInstance = useTable(
    {
      columns: productsColumns,
      data: productsData,
    },
    useGlobalFilter,
    tableHooks,
    useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  useEffect(() => {
    if (data?.length > 0) {
      setProducts(data);
    } else {
      setProducts([]);
    }
  }, [data]);
  const handleLink = (data) => {
    setEditData(data);
    navigate.push(`/dashboard/posts/${data?.id}`);
setEdit(true)
  };
  const isEven = (idx) => idx % 2 === 0;
  return (
    <>
      <div className="w-full">
        <table
          className="w-full overflow-auto scrollbar-hide"
          {...getTableProps()}
        >
          <thead className="capitalize border-spacing-3 border-gray-50 bg-[#fefefefe]">
            {headerGroups?.map((headerGroup, index) => (
              <tr key={index} {...headerGroup?.getHeaderGroupProps()}>
                {headerGroup?.headers?.map((column, index) => (
                  <>
                    <th
                      key={index}
                      className="py-1 px-3 lg:py-2 lg:px-5 capitalize text-[#A4A7B7] font-medium text-[]"
                      {...column?.getHeaderProps(
                        column?.getSortByToggleProps()
                      )}
                    >
                      <p className="flex items-center space-x-2">
                        {column?.render("Header")}
                        {column?.isSorted ? (
                          column?.isSortedDesc ? (
                            <ArrowDown />
                          ) : (
                            <ArrowUp />
                          )
                        ) : (
                          ""
                        )}
                      </p>
                    </th>
                  </>
                ))}
                <th className="font-medium text-sm text-[#656565]">
                  {dropdown?.length > 0 ? "Action" : ""}
                </th>
              </tr>
            ))}
          </thead>
          <tbody className=" text-xs" {...getTableBodyProps()}>
            {rows?.map((row, idx) => {
              prepareRow(row);

              return (
                <tr
                  key={idx}
                  {...row?.getRowProps()}
                  className={` hover:bg-white border-y-[1px]  ${
                    isEven(idx)
                      ? " cursor-pointer text-xs"
                      : " cursor-pointer text-xs"
                  }`}
                >
                  {row?.cells?.map((cell, idx) => (
                    <>
                      <td
                        onClick={() => handleLink(row?.original)}
                        key={idx}
                        className={classNames(
                          "font-medium  text-[#031434] p-3"
                        )}
                        {...cell?.getCellProps()}
                      >
                        {cell?.render("Cell")}
                      </td>
                    </>
                  ))}
                  <Dropdown
                    title={<SquareIcon />}
                    subtitle={dropdown}
                    data={row?.original}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

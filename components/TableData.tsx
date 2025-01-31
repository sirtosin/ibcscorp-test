import React from 'react'
import Card from './Card';
import SkeletonTable from "./skeleton/Table";
import Paginate from "./table/table";
import { Post } from '@/typings';

interface Props {
  title: string;
  data: Post[];
  loading: boolean;
  dropdown?: string[]
}

export default function TableData({title,data,loading,dropdown}:Props) {
  return (
    <>
      <h2 className="text-[#A4A7B7]">{title}</h2>
      <section>
        <Card>
          <div className="w-full overflow-auto sm:overflow-hidden my-3 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#98989A] p-10">
            {loading ? (
              <SkeletonTable />
            ) : data?.length > 0 ? (
              <Paginate dropdown={dropdown} data={data} />
            ) : (
              <p className="text-[#98989A] text-xl text-center capitalize font-medium">
                no data
              </p>
            )}
          </div>
        </Card>
      </section>
    </>
  );
}

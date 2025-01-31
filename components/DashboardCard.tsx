import React from 'react'
import Card from './Card'

interface Props {
    title:string
    color:string
    num?:number
}

export default function DashboardCard({title,color,num}:Props) {
  return (
    <div>
      <Card>
        <aside className="w-[208px] h-[130px] space-y-6 p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-[#303B54] font-semibold">{title}</h2>
            <p
              style={{
                background: color,
              }}
              className="size-6 rounded p-2"
            />
          </div>
          <div className="space-y-1 flex-col flex">
            <h2 className="text-[#434854] font-semibold">{num}</h2>
            <p className="text-[#00992B] text-[9px]">20 More than than yesterday</p>
          </div>
        </aside>
      </Card>
    </div>
  );
}

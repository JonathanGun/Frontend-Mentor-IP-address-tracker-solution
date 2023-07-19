"use client"

export interface InfoItem {
  label: string
  value: string
}

interface IInfoCard {
  infoItems: InfoItem[]
}

const InfoCard: React.FC<IInfoCard> = ({ infoItems }) => {
  return (
    <div className="info-card flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 p-4 sm:p-10 bg-white rounded-xl w-full h-fit z-10 justify-center items-center sm:items-start break-words">
      {infoItems.map((info) => (
        <div className="flex flex-col justify-center items-center" key={info.label}>
          <span className="text-[10px] opacity-70 font-medium uppercase">{info.label}</span>
          <span className="text-sm font-bold">{info.value}</span>
        </div>
      ))}
    </div>
  )
}

export default InfoCard

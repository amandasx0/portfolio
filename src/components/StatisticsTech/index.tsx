type StatisticsTechProps = {
  stack: string
  percentage: number
  position: "front" | "back"
}

const StatisticsTech = ({ stack, percentage, position }: StatisticsTechProps) => {
  const isFront = position === "front"

  return (
    <div className="w-full mt-5">
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium">{stack}</span>
        <span className={isFront ? "text-primary" : "text-accent"}>
          {percentage}%
        </span>
      </div>

      <div className="h-2 bg-gray-700 rounded-full ">
        <div
          className={`h-full rounded-full
            ${isFront 
              ? "bg-gradient-to-r from-primary to-primary/60" 
              : "bg-gradient-to-r from-accent to-accent/60"
            }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default StatisticsTech
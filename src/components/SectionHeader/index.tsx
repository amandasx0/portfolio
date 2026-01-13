import Image, { type StaticImageData } from "next/image"

type SectionHeaderProps = {
  icon: StaticImageData
  iconBg: string
  title: string
}

const SectionHeader = ({ icon, iconBg, title }: SectionHeaderProps) => (
  <div className="flex gap-2 items-center">
    <div className={`p-2 rounded-lg ${iconBg}`}>
      <Image src={icon} alt="" width={24} height={24} />
    </div>
    <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
  </div>
)


export default SectionHeader
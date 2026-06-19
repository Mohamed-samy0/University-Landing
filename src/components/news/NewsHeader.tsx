export const NewsHeader = ({
  tag,
  title,
  description,
}: {
  tag: string
  title: string
  description: string
}) => {
  return (
    <div className="flex flex-col items-center text-center mb-14 max-w-3xl mx-auto">
      <span className="bg-[#273480] text-white text-[13px] font-bold tracking-widest px-4 py-2 mb-6 shadow-sm">
        {tag}
      </span>
      <h2 className="text-4xl lg:text-[46px] font-bold text-[#101828] leading-[1.1] mb-5">
        {title}
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed max-w-140">{description}</p>
    </div>
  )
}

import Image from 'next/image'
import { NewsItem } from './News.types'

export const NewsCard = ({ news }: { news: NewsItem }) => {
  const formattedDate = new Date(news.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="block group w-full h-full flex flex-col">
      <div
        className="relative w-full h-[260px] lg:h-[350px] bg-gray-100 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2"
        style={{
          clipPath: 'polygon(11% 0, 100% 0, 100% 70%, 88% 100%, 0 100%, 0 26%)',
        }}
      >
        <Image
          src={news.image?.url || '/placeholder.jpg'}
          alt={news.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="pt-6 flex flex-col flex-1">
        <span className="text-[12px] font-bold uppercase tracking-widest text-[#348141] mb-3">
          {news.category}
        </span>
        <h3 className="text-[20px] lg:text-[22px] font-bold text-[#101828] leading-tight mb-4 line-clamp-2 transition-colors">
          {news.title}
        </h3>
        <span className="text-gray-500 text-[14px] font-medium mt-auto">{formattedDate}</span>
      </div>
    </div>
  )
}

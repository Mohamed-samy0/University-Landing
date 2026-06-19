import { ArrowLeft, ArrowRight } from 'lucide-react'
interface Props {
  scrollPrev: () => void
  scrollNext: () => void
}

export const CarouselButtons = ({ scrollPrev, scrollNext }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={scrollPrev}
        className="w-12 h-12 rounded-full border-[1.5px] border-gray-300 bg-white flex items-center justify-center text-gray-400 hover:border-[#e84925] hover:text-[#e84925] transition-all focus:outline-none"
        aria-label="Previous Slide"
      >
        <ArrowLeft />
      </button>

      <button
        onClick={scrollNext}
        className="w-12 h-12 rounded-full border-[1.5px] border-[#e84925] bg-white flex items-center justify-center text-[#e84925] hover:bg-[#e84925] hover:text-white transition-all focus:outline-none shadow-sm"
        aria-label="Next Slide"
      >
        <ArrowRight />
      </button>
    </div>
  )
}

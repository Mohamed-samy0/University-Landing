// src/components/slider/Slider.types.ts

export interface SliderCard {
  id: string;
  title: string;
  description?: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  badge?: {
    text: string;
    position: 'top-left' | 'top-right';
  };
  link?: string;
}

export interface SliderProps {
  title: string;
  cards: SliderCard[];
  slidesToShow?: number; // default: 3
  autoplay?: boolean;
  autoplayInterval?: number; // default: 5000ms
}

export interface MediaObject {
  url: string;
  alt?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  image: MediaObject;
  date: string;
}

export interface NewsSectionData {
  tag: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  featuredNews: NewsItem[];
}

export interface NewsSectionProps {
  data: NewsSectionData;
}
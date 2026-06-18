import { Hero as PayloadHero } from "@/payload-types";

export interface HeroProps {
  data?: PayloadHero;
}

export interface HeroSearchProps {
  searchPlaceholder?: string;
}

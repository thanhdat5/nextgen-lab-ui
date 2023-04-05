export type Product = {
  id: number;
  thumbnail: string;
  logo: string;
  name: string;
  shortDescription: string;
  description: JSX.Element;
  featuresClassName: string;
  features: ProductFeature[];
  content?: JSX.Element;
};
export type ProductFeature = {
  title?: string;
  description: string;
};

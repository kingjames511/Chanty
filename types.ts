import { ReactNode } from "react";

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface PricingPlanProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

export interface NavLinkProps {
  href: string;
  children: ReactNode;
}
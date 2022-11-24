// Marketing.types.ts
import type { IconType } from 'react-icons';
// =======================================================

export type PricingType = {
	id: string;
  title: string;
  price: string;
  perks: Array<string>;
  icon: IconType;
};

export type PricingListType = {
	pricingList: Array<PricingType>;
}

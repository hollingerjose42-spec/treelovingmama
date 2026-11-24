export const OFFER_AMOUNT = 500;

const OFFER_LINKS = [
  "https://linkthem.net/?offer_id=1982&aff_id=5383&source=omni500",
  "https://www.stw4c9hx.com/75TNF9/225JFQ1/"
];

function getOfferUrl(): string {
  const storageKey = "offer_split_test_v1";

  if (typeof window === "undefined") {
    return OFFER_LINKS[0];
  }

  const saved = localStorage.getItem(storageKey);

  if (saved === "0" || saved === "1") {
    return OFFER_LINKS[Number(saved)];
  }

  const variant = Math.random() < 0.5 ? 0 : 1;

  localStorage.setItem(storageKey, String(variant));

  return OFFER_LINKS[variant];
}

export const OFFER_URL = getOfferUrl();

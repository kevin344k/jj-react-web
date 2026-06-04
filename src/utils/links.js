import links from "../assets/links.json";

export const socialLinks = links.socialLinks;
export const liveLinks = links.liveLinks;
export const whatsappNumbers = links.numbers;
export const whatsappMessages = links.messages;

const buildEncodedText = (message) => encodeURIComponent(message || "");

export const buildWhatsAppApiLink = (phoneKey, messageKey) => {
  const phone = whatsappNumbers[phoneKey];
  const message = whatsappMessages[messageKey];
  if (!phone) return "#";
  return `https://api.whatsapp.com/send?phone=${phone}&text=${buildEncodedText(message)}`;
};

export const buildWaMeLink = (phoneKey, messageKey) => {
  const phone = whatsappNumbers[phoneKey];
  const message = whatsappMessages[messageKey];
  if (!phone) return "#";
  return `https://wa.me/${phone}?text=${buildEncodedText(message)}`;
};

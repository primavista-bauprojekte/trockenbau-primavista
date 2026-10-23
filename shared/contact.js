const phone = (id, label, display, international) => Object.freeze({
  id,
  label,
  display,
  international,
  href: `tel:${international}`,
});

export const primaryContact = phone(
  'primary', 'Hauptkontakt (Deutschland)', '+49 176 48747554', '+4917648747554',
);
export const secondaryContact = phone(
  'sonja', 'Alternativer Kontakt (Sonja)', '+49 1578 9818308', '+4915789818308',
);
// Preserve the existing Swiss contact until its ownership and role are confirmed.
export const swissContact = phone(
  'switzerland', 'Kontakt Schweiz', '+41 78 265 93 32', '+41782659332',
);
export const contactPhones = Object.freeze([primaryContact, secondaryContact, swissContact]);
export const primaryWhatsApp = `https://wa.me/${primaryContact.international.slice(1)}`;
export const contactPhoneText = contactPhones
  .map((contact) => `${contact.label}: ${contact.display}`)
  .join(' · ');

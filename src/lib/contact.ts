export const EMAIL_CONTACT = {
  label: "Email",
  value: "office@ravadotech.com",
  href: "mailto:office@ravadotech.com",
  iconSrc:
    "https://res.cloudinary.com/destej60y/image/upload/v1778101368/email_xj225c.png",
  external: false,
} as const;

export const TELEGRAM_CONTACT = {
  label: "Telegram",
  value: "@KhaderX_2000",
  href: "https://t.me/KhaderX_2000",
  iconSrc:
    "https://res.cloudinary.com/destej60y/image/upload/v1778101300/telegram_zkbpen.png",
  external: true,
} as const;

export const WHATSAPP_CONTACT = {
  label: "WhatsApp",
  value: "https://wa.me/qr/QRPSAA62KGIMA1",
  href: "https://wa.me/qr/QRPSAA62KGIMA1",
  iconSrc:
    "https://res.cloudinary.com/destej60y/image/upload/v1778101300/whatsapp_fpmu9c.png",
  external: true,
} as const;

export const CONTACT_ITEMS = [
  EMAIL_CONTACT,
  TELEGRAM_CONTACT,
  WHATSAPP_CONTACT,
] as const;

/**
 * El Maestro Order & Communication Configuration
 */
export interface WhatsAppOrderConfig {
  phoneNumber: string;
  displayPhoneNumber: string;
  businessNameAr: string;
  businessNameEn: string;
}

export const OFFICIAL_WHATSAPP_CONFIG: WhatsAppOrderConfig = {
  phoneNumber: '201037733214',
  displayPhoneNumber: '01037733214',
  businessNameAr: 'المايسترو محمصات وفريشات',
  businessNameEn: 'El Maestro Roastery & Fresh Juices'
};

// Backwards compatibility export
export const WHATSAPP_ORDER_CONFIG = OFFICIAL_WHATSAPP_CONFIG;

export function normalizeWhatsAppNumber(phone?: string): string {
  if (!phone) return OFFICIAL_WHATSAPP_CONFIG.phoneNumber;
  const digits = phone.replace(/\D/g, '');
  if (digits.startsWith('01') && digits.length === 11) {
    return `20${digits.substring(1)}`;
  }
  if (digits.startsWith('201') && digits.length === 12) {
    return digits;
  }
  return digits || OFFICIAL_WHATSAPP_CONFIG.phoneNumber;
}

export function normalizeEgyptianPhone(phone: string): string {
  return normalizeWhatsAppNumber(phone);
}

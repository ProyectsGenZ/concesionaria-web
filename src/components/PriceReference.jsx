import React from 'react';
import { EXCHANGE_RATE, EXCHANGE_RATE_DATE } from '../data/vehicles';

export default function PriceReference() {
  return <p className="mt-3 text-xs leading-relaxed text-zinc-600">Conversión orientativa de demostración: USD 1 = ARS {EXCHANGE_RATE.toLocaleString('es-AR')}. Referencia configurada el {EXCHANGE_RATE_DATE}; confirmá el precio con un asesor.</p>;
}

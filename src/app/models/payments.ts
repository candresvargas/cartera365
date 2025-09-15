export interface Payment {
  id: number; // idPago
  debtorId: number;   // Relación con deudor
  loanId: number;     // Relación con préstamo
  fechaPago: Date;
  montoPagado: number;
  tipoPago: 'total' | 'parcial' | 'interes' | 'mora' | 'cancelacionAnticipada';
  medioPago: 'efectivo' | 'transferencia' | 'consignacion';
  referencia: string;
  estado: 'aplicado' | 'pendiente' | 'anulado';
}

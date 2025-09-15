export interface Money {
  id: number;
  fecha: string; // ISO date string
  tipo: 'ingreso' | 'egreso';
  monto: number;
  descripcion: string;
  idPrestamo?: number; // opcional, si aplica a un préstamo
  idCliente?: number;  // opcional, si aplica a un cliente
  medioPago: 'efectivo' | 'transferencia' | 'cheque' | 'otro';
  responsable: string;
}

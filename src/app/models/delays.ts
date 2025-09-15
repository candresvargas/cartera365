export interface Delay {
  id: number;
  idPrestamo: number;
  fechaVencimiento: string; // ISO string
  fechaPago?: string; // opcional, si aún no se paga
  diasMora: number;
  interesMora: number;
  estado: 'pendiente' | 'saldada';
}

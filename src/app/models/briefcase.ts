export interface CarteraI {
  id: number;
  clienteId: number;           // Referencia al cliente
  clienteNombre?: string;      // Para mostrar nombre directamente en la tabla
  producto: string;
  capital: number;
  intereses: number;
  mora: number;
  estado: 'al_dia' | 'en_mora' | 'cancelado';
  fechaDesembolso: Date;
  fechaVencimiento: Date;
  totalPagado: number;
}

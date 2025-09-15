export interface Guarantee {
  id: number;                 // Identificador único
  idPrestamo: number;         // Relación con el préstamo
  tipo: 'vehículo' | 'inmueble' | 'documento' | 'prenda';
  valorEstimado: number;      // Valor estimado del bien
  documentoAdjunto?: string;  // Ruta o URL del archivo digital
  estado: 'vigente' | 'ejecutada' | 'liberada';
}

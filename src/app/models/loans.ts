export interface Loan {
  id: number;
  amount: number;
  rate: number;
  term: number;
  status: 'al_dia' | 'en_mora' | 'cancelado';
  debtorId: number;
  debtorName?: string; // <-- lo usamos en la UI
}

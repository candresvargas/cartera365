export interface Debtor {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  documents: number;
  status: "active" | "inactive";
}

export interface Profile {
    id: number;
    userId: number; // Foreign key reference to User
    email: string;
    gender: string;
    address: string;
    pincode: string;
    city: string;
    state: string;
    country: string;
  }
  
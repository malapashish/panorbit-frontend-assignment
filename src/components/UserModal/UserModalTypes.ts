export namespace UserModalTypes {
  export interface UserModalProps {
    users: User[];
    onSelectUser: (user: User) => void;
  }
  export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    profilepicture: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  }
  export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  }
  export interface Geo {
    lat: string;
    lng: string;
  }
  export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}
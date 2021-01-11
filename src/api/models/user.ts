export type UserAddresGeo = {
  lat: string;
  lng: string;
};

export type UserAddres = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserAddresGeo;
};

export type UserCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddres;
  phone: string;
  website: string;
  company: UserCompany;
};

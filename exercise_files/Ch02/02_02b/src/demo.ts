interface Contact extends Address {
  id: number;
  name: string;
  birthDate: Date;
  note?: string; //this field is optional with "?"
}

interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zipCode: number;
}

let primaryContact: Contact = {
  birthDate: new Date("01-01-1911"),
  id: 1245,
  name: "john doe",
  line1: "11234 zip line",
  city: "new york",
  state: "new york",
  zipCode: 11234,
};

let secondaryContact: Contact = {
  birthDate: new Date("01-01-1911"),
  id: 1245,
  name: "john doe",
  note: "a secondary contact point",
  line1: "11234 zip line",
  city: "new york",
  state: "new york",
  zipCode: 11234,
};

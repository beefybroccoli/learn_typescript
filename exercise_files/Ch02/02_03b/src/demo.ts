//type alias
type ContactName = string;

interface Contact {
  id: number;
  name: ContactName; //declare name with type alias
  birthDate?: Date;
}

let primaryContact: Contact = {
  birthDate: new Date("01-01-1980"),
  id: 12345,
  name: "Jamie Johnson",
};

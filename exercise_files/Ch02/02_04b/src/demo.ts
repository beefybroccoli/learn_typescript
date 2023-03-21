enum ContactStatus {
  Active = "Active",
  Inactive = "Inactive",
  New = "New",
}

interface Contact {
  id: number;
  name: ContactName;
  birthDate?: Date;
  status: ContactStatus;
}

let primaryContact: Contact = {
  birthDate: new Date("01-01-1980"),
  id: 12345,
  name: "Jamie Johnson",
  status: ContactStatus.Active,
};

type ContactName = string;

type ContactName = string;

type ContactBirthDate = Date | number | string

// redefined using piping
// enum ContactStatus {
//     Active = "active",
//     Inactive = "inactive",
//     New = "new"
// }

interface Contact {
    id: number
    name: ContactName
    birthDate?: ContactBirthDate
    status?: ContactStatus
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

//using "&" to combine two type together into a new type
type AddressableContact = Contact & Address

//using type alias to define enum
type ContactStatus = "active" | "inactive" | "new"

function getBirthDate(contact: Contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    }
    else {
        return contact.birthDate
    }
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "inactive"
}

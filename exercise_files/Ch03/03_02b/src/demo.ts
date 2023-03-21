/**
 * 
 * using the "keyof" operator
 * 
 * 
 */

type ContactName = string;
type ContactStatus = "active" | "inactive" | "new"
type ContactBirthDate = Date | number | string

type ContactFields = keyof Contact

interface Contact  {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}

function getValue(source, propertyName: keyof Contact){
    return source[propertyName]
} 

function getValue_generic<T>(source, propertyName: keyof Contact){
    return source[propertyName]
}

function getValue_generic_v2<T, U extends keyof T>(source: T, propertyName: U){
    return source[propertyName]
}
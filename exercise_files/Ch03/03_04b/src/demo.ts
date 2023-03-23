type ContactStatus = "active" | "inactive" | "new";

interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
    address: Address;
}

// interface ContactEvent {
//     contactId: number;
// }

interface ContactEvent {
    //the type of contactId match "id" in Contact type
    contactId: Contact["id"];
}

interface ContactDeletedEvent extends ContactEvent { 
}

interface ContactStatusChangedEvent extends ContactEvent { 
    oldStatus: Contact["status"];
    newStatus: Contact["status"];
}

interface ContactEvents {
    deleted: ContactDeletedEvent;
    statusChanged: ContactStatusChangedEvent;
    // ... and so on
}

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];
}

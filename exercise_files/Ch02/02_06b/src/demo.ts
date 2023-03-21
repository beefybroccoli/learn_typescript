interface Contact {
  id: number;
  name: string;
}

function clone(source: Contact): Contact {
  return Object.apply({}, source);
}

function clone_generic<T>(source: T): T {
  return Object.apply({}, source);
}

function clone_generic_2_types<T1, T2>(source: T1): T2 {
  return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone(a);
const b1 = clone_generic<Contact>(a);
const b2 = clone_generic_2_types<Contact, Contact>(a);

const aa = { id: 123, name: "Homer Simpson" };
const bb = clone(aa);

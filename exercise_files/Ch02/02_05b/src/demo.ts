interface Contact {
  id: number;
  name: string;
  method_1(input: string): Contact;
  method_2(): Contact;
}

/**
 *
 * @param source
 * @returns
 */
function clone(source: Contact): Contact {
  return Object.apply({}, source);
}

/**
 *
 * @param source
 * @param func
 * @returns
 */
function clone_2(source: Contact, func: (source: Contact) => Contact): Contact {
  return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Tom" };
const b = clone(a);

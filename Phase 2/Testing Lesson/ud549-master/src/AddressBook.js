class AddressBook {
    constructor() {
        this.addressBook = [];
    }

    addContact(contact) {
        this.addressBook.push(contact);
        
        return contact;
    }

    deleteContact(contact) {
        delete this.addressBook[contact];
    }

    getContact(contact) {
        return this.addressBook[contact];
    }
}
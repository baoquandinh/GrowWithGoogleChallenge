class AddressBook {
    constructor() {
        this.addressBook = [];
        this.initialComplete = false;
    }

    // Fake API call for writing asynchronous test suites created for this lesson
    getInitialContacts(cb) {
        let self = this;
        setTimeout(function() {
            self.initialComplete = true;
            if(cb) {
                return cb();
            }
        }, 3);
    }

    addContact(contact) {
        this.addressBook.push(contact);
        return contact;
    }

    deleteContact(contact) {
        delete this.addressBook[contact];
    }

    getContact(index) {
        return this.addressBook[index];
    }
}
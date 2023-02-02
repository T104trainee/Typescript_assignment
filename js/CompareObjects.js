"use strict";
const person1 = {
    fName: 'John',
    lName: 'Doe',
    address1: '123 Anywhere St',
    address2: 'Avenue 1',
    city: 'Hyderabad',
    state: 'TS',
    pin: '500081',
    phonenos: [
        { phone: '9492875814', type: 'Home' },
        { phone: '9492877814', type: 'Work' },
        { phone: '9492875815', type: 'Personal' },
    ],
    emails: [
        { email: 'johndoe@gmail.com', type: 'Home' },
        { email: 'johnd@myoffice.com', type: 'Office' },
        { email: 'doejohn@outlook.com', type: 'Personal' },
    ],
};
const person2 = {
    fName: 'John',
    lName: 'Doe',
    address1: '123 Anywhere St',
    address2: 'Avenue 1',
    city: 'Hyderabad',
    state: 'TS',
    pin: '500081',
    phonenos: [
        { phone: '9492875814', type: 'Home' },
        { phone: '9492877814', type: 'Work' },
        { phone: '9492875815', type: 'Personal' },
    ],
    emails: [
        { email: 'johndoe@gmail.com', type: 'Home' },
        { email: 'johnd@myoffice.com', type: 'Office' },
        { email: 'doejohn@outlook.com', type: 'Personal' },
    ],
};
if (person1 === person2) {
    console.log('Objects are equal');
}
else {
    console.log('objects are NOT equal');
}

const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');


// we can create a function to return a random / fake "Product"
const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    };
    return newUser;
};
    
const newFakeUser = createUser();
console.log(newFakeUser);

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newCompany;
};
    
const newFakeCompany = createCompany();
console.log(newFakeCompany);

// req is short for request
// res is short for response
app.get("/api/users/new", (req, res) => {
    //code below is replced by below
    //const newUser = createUser();();
    //res.json(newUser);
  res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());

});

app.get("/api/user/company", (req, res) => {
    res.json({user: createUser(), company: createCompany()});

});


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );



function extractNameAndStreet(person) {
    const { address: {street,state }, name } = person;
    return {
      name,
      street,
      state
    };
  }

const inputObject = {
    name: "Mithun",
    age: 21,
    address: {
    street: "B8, Block B, Industrial Area.",
    city: "Sector 62, Noida",
    state: "Uttar Pradesh",
    },
    };

    const result = extractNameAndStreet(inputObject);
    console.log(result);
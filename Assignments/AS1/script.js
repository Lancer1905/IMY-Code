/* Pieter Venter u23896257 */
var pets = [
  { name: "Polly", species: "bird", age: 1, adopted: false, adoptedDate: "", adoptionFee: 560 },
  { name: "Fluffy", species: "dog", age: 4, adopted: true, adoptedDate: "2023-03-27",adoptionFee: 890 },
  { name: "Daisy", species: "dog", age: 9, adopted: true, adoptedDate: "2021-01-05", adoptionFee: 780 },
  { name: "Coco", species: "rabbit", age: 3, adopted: true, adoptedDate: "2019-01-30", adoptionFee: 615 },
  { name: "Simba", species: "cat", age: 4, adopted: true, adoptedDate: "2019-09-30", adoptionFee: 995 },
  { name: "Oreo", species: "rabbit", age: 4, adopted: false, adoptedDate: "", adoptionFee: 605 },
  { name: "Bella", species: "cat", age: 6, adopted: false, adoptedDate: "", adoptionFee: 810 },
  { name: "Milo", species: "bird", age: 3, adopted: false, adoptedDate: "", adoptionFee: 740 },
  { name: "Buddy", species: "dog", age: 10, adopted: true, adoptedDate: "2021-02-01", adoptionFee: 735 },
  { name: "Pebbles", species: "bird", age: 4, adopted: false, adoptedDate: "", adoptionFee: 505 },
];

class PetHandler {
    
    constructor(petsArray = []){
      this.petsArray = petsArray;
    }

    findPetsInAgeRange(minAge, maxAge){
      // requires to access objects to get valuable info from array
      if (minAge > maxAge) {
        throw new Error('Minimum age cannot be greater than maximum age');
      } else if (minAge < 0) { 
        throw new Error('Minimum age cannot be less than 0') 
      }

      return this.petsArray.filter(pet => {
        return pet.age >= minAge && pet.age <= maxAge;
      });
    }

    listAdoptedPetsByDate() { // requires to access objects to get valuable info from array
      const adoptedPets = this.petsArray.filter(pet => pet.adopted && pet.adoptedDate);
  
      return adoptedPets.sort((petA, petB) => petB.adoptedDate - petA.adoptedDate);
    }

    ListPets(petArray, ...petObjects){

      const createPetItem = (item) =>{
        let adoptStatus;

        if (item.adopted){
          adoptStatus = " | Adopted!";
        } else {
          adoptStatus = "";
        }
        

        return `${item.name} | ${item.species} | Age: ${item.age} ${adoptStatus}`;
      }

      if (petArray !== undefined){
        return petArray.map(createPetItem);
      } else if (petObjects.length > 0){
        let tPetArray = [];
        tPetArray.push(...petObjects);
        return tPetArray.map(createPetItem);
      } else {
        return this.petsArray.map(createPetItem);
      }
    }

    calculateUniqueAdoptionFee(...petNames){
      
      const uniquePetNames = new Set(petNames);
      
      if (uniquePetNames.size > 1){
      
        let totalAdoptionFee = 0;
        const filteredPets = this.petsArray.filter(pet => {
          if (uniquePetNames.has(pet.name)){
            totalAdoptionFee += pet.adoptionFee;
            return true;
          }
        }); // not sure where to return list
        return totalAdoptionFee;
      } else {
        const petName = petNames[0];

        let totalAdoptionFee = 0;

        this.petsArray.filter(pet => {
          if (petName == pet.name) {
            totalAdoptionFee += pet.adoptionFee;
          }
        });

        return totalAdoptionFee;
      }       
    }
}

Array.prototype.findPetsInAgeRange = function (minAge, maxAge) {
  if (!Array.isArray(this)) {
    throw new TypeError('Expected an array');
  }

  const handler = new PetHandler(this);
  return handler.findPetsInAgeRange(minAge,maxAge);
};

Array.prototype.listAdoptedPetsByDate = function () {
  const handler = new PetHandler(this);
  return handler.listAdoptedPetsByDate();
};

Array.prototype.ListPets = function (petArray, ...petObjects) {
  if (!Array.isArray(this)) {
    throw new TypeError('Expected an array');
  }

  const handler = new PetHandler(this);
  return handler.ListPets(petArray, ...petObjects);
};

Array.prototype.calculateUniqueAdoptionFee = function (...petNames) {
  if (!Array.isArray(this)) {
    throw new TypeError('Expected an array');
  }

  const handler = new PetHandler(this);
  return handler.calculateUniqueAdoptionFee(...petNames);
};

const handler = new PetHandler(pets);

// Testing

/* function listPets(){
  console.log("ListPets function " + handler.ListPets());
}

function findPetsInAgeRange(min,max){
  const adoptedPets = handler.findPetsInAgeRange(min,max);
  adoptedPets.forEach(pet => {
    console.log("Age range - Name: " + pet.name + ` ${pet.age}`);
  });
}

function listAdoptedPetsByDate(){
  const adoptedPets = handler.listAdoptedPetsByDate();
  adoptedPets.forEach(pet => {
    console.log("Adopted - Name: " + pet.name + ` ${pet.adoptedDate}`);
  });
}

function calculateUniqueAdoptionFee(...name){
  console.log("Calculated: " + handler.calculateUniqueAdoptionFee(...name));
}

function findAgeList(min,max){
  console.log("FindAgeList: " + handler.findPetsInAgeRange(min,max).ListPets());
} */
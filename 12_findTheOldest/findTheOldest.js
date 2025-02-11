const findTheOldest = function(people) {
    const OldestByLivedYears = people.reduce((newArr,person) => {
       if(!person.yearOfDeath){
        person.yearOfDeath = new Date().getFullYear();
        newArr.push(person);
       }
       newArr.push(person);

       return newArr;
    },[]).sort((a,b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
    
    return OldestByLivedYears[0];
};

// Do not edit below this line
module.exports = findTheOldest;

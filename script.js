const person = {
    name: "Fatima",
    age: 26,
    favColors: ["blue", "pink"],
    sayHello: function () {
        console.log("Hello!");},
    meet: function (name) {
        console.log("This is "+name)
    },
    getAge: function () {
        return person.age
    },
    getMainFavColor: function () {
        return person.favColors[0]
    },
};

console.log(person);

console.table(person);

console.log(person.name);
console.log(person.age);
console.log(person.favColor);

//details of a book I found on my desk
const artbook = {
    name: "Surrealismus",
    ISBN: "978-3-03876-133-4",
    pubYear: 2019,
    chapters: ["Einführung", "Was ist Surrealsimus?", "surrealistische Kunst schaffen", "surreale Formen", "die surrealistische Revolution"]
}

console.log(artbook);

console.table(artbook.chapters);
console.log(artbook.chapters[0]);

artbook.appendix = ["Glossar","Timeline", "Index", "Bildnachweise"];

console.log(artbook);

const car = {
    make: "Ford",
    model: "Fiesta",
    color: "cherry red",
}

console.log(car);

car.year = 2005;

console.log(artbook.chapters[1]); // Was ist Surrealismus?
console.log(car.model); // Fiesta
console.log(artbook.appendix[3]); // Bildnachweise
console.log(car.year); // 2005


artbook.author = { 
    name: "Amy Dempsey",
    age: 53,
    city: "New York",
    books: ["Styles, schools and movements", "Destination Art."]};


console.log(artbook.author);



console.table(artbook);

//complex-objects workshop

artbook.tags = ["art", "surrealism", "art history", "art movements"];
artbook.synposis = "An incisive overview of surrealism, introducing the movement’s key artists and enduring concepts as well as tracing its precursors and continuing influence.";

console.log(artbook.author.age); // 53
console.log(artbook.author.books[1]); // Destination Art

console.log(artbook.author.books.length); // 2
console.log(artbook.tags[length-1]); // art movements - this is showing up as undefined, even though I'm expecting art movements.



console.log(`There are ${artbook.chapters.length} chapters in the book ${artbook.name} by ${artbook.author.name}. ${artbook.author.name} lives in ${artbook.author.city}. She has published ${artbook.author.books.length} other books.`);
// There are 5 chapters in the book Surrealismus by Amy Dempsey. Amy Dempsey lives in New York. She has published 2 other books.

//Object Methods


person.sayHello();

person.meet("Alice");

person.getMainFavColor(); // blue ( N.B. wrote these in the console to get the results ) 
person.getAge(); // 26




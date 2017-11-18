//q3//
//(function () {
   // var ul = document.createElement('ul');
   // ul.setAttribute('id', 'proList');

   // var title;

   // let booksList = ['gone_wind', 'game_thrones', 'love_time_cholera', 'sherlock_holmes', 'da_vinci_code', 'azazeel', 'old_man_sea', 'origin', 'hobbit', 'thirteen_reasons_why'];

   // document.getElementById('booksList').appendChild(ul);
   // booksList.forEach(renderbooksList);

   // function renderbooksList(element, index, arr) {
    //    var li = document.createElement('li');
     //   li.setAttribute('class', 'item');

       // ul.appendChild(li);

        //title = document.body(element);

       // li.innerHTML = li.innerHTML + element;
    //}
//})();
//q4//
let books = [
    { id: 'gone_wind',title: 'Gone with the wind', language: 'english', author: 'Margaret Mitchell' },
    { id: 'game_thrones',title: 'Game of thrones', language: 'english', author: 'George R. R. Martin' },
    { id: 'love_time_cholera', title: 'Love in the time of Cholera', language: 'english', author: 'Gabriel García Márquez' },
    { id: 'sherlock_holmes',title: 'Sherlock Holmes', language: 'english', author: 'Arthur Conan Doyle' },
    { id: 'da_vinci_code' ,title: 'Da vinci code', language: 'english', author: 'Dan Brown' },
    { id: 'azazeel', title: 'Azazeel', language: 'arabic', author: 'Youssef Ziedan' },
    { id: 'old_man_sea', title: 'Old man and the sea', language: 'english', author: 'Ernest Hemingway' },
    { id: 'origin', title: 'Origin', language: 'english', author: 'Jessica Khoury' },
    { id: 'hobbit', title: 'The Hobbit', language: 'english', author: 'J. R. R. Tolkien' },
    { id: 'thirteen_reasons_why', title: 'Thirteen reasons Why', language: 'english', author: 'Jay Asher' }
];
let myImages = {
    gone_wind: 'images/gone_wind.jpg',
    game_thrones: 'images/game_thrones.jpg',
    love_time_cholera: 'images/love_time_cholera.jpg',
    sherlock_holmes: 'images/sherlock_holmes.jpg',
    da_vinci_code: 'images/da_vinci_code.jpg',
    azazeel: 'images/azazeel.jpg',
    old_man_sea: 'images/old_man_sea.jpg',
    origin: 'images/origin.jpg',
    hobbit: 'images/hobbit.jpg',
    thirteen_reasons_why: 'images/thirteen_reasons_why.jpg'
};
function createUl() {
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'myBooks');
    for (var i = 0; i < books.length; i++){
        var id = books[i].id;
        var title = books[i].title;
        var language = books[i].language;
        var author = books[i].author;
        let li = document.createElement('li'); 
        let h1 = document.createElement('h1');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');
        h1.innerHTML = title;
        h2.innerHTML = 'Language of the book: ' + language;
        h3.innerHTML = 'Written by: ' + author;
        li.setAttribute('id', id);
        li.setAttribute('class', 'item');
        li.appendChild(h1);
         
        for (let key of Object.keys(myImages)) {
            let valueOfKeys = myImages[key];
            if (id == key) {
                img.src = valueOfKeys;
                img.alt = key;
            }
        }
        ul.appendChild(li);
        li.appendChild(img);
        li.appendChild(h1)
        li.appendChild(h2);
        li.appendChild(h3);
    }
    console.log(ul);
    document.body.appendChild(ul);

}
createUl();
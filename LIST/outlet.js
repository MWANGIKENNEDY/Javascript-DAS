const list = require('./scripts');
const List = require('./scripts');
const Customer = require('./customer');

//list of movies
const listObject = new list();
//list of customers
const customers = new List();

const movieArray = [
'The Shawshank Redemption',
'The Godfather',
'The Godfather: Part II',
'Pulp Fiction',
'The Good, the Bad and the Ugly',
'12 Angry Men',
'Schindler’s List',
'The Dark Knight',
'The Lord of the Rings: The Return of the King',
'Fight Club',
'Star Wars: Episode V - The Empire Strikes Back',
'One Flew Over the Cuckoo’s Nest',
'The Lord of the Rings: The Fellowship of the Ring',
'Inception',
'Goodfellas',
'Star Wars',
'Seven Samurai',
'The Matrix',
'Forrest Gump',
'City of God',
]

//adding the data to my list
for (var k= 0;k<movieArray.length;k++){
    listObject.append(movieArray[k]);
}

//iterating through the list
function displayList(list){
    for(list.front();list.currPos() < list.length(); list.next()){
        if(list.getElement() instanceof Customer){
            console.log(list.getElement()['name'] + ', '+list.getElement()['movie']);
        }else{
            console.log(list.getElement());
        }    
    }
}

function checkOut(name,movieName,filmLlist,customerList){
    if(listObject.contains(movieName)){
        let newC= new Customer(name,movieName);
        customerList.append(newC);
        filmLlist.remove(movieName);
    }else{
        console.log('movie not found');
    }
}

checkOut('kennedy','The Good, the Bad and the Ugly',listObject,customers);
checkOut('kennedy','Goodfellas',listObject,customers);
checkOut('kennedy','12 Angry Men',listObject,customers);
checkOut('kennedy','Forrest Gump',listObject,customers);

displayList(customers)





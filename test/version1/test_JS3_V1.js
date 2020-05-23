// VERSION 1

/*
1.
Write a function that:
- Logs to the console numbers 1 to 100.
- However, if the number is a multiple of both 3 and 5 it should log "Jackpot!" instead of the number.
- If it doesn't pass the function should log "multiple of 3" if it's a multiple of only 3
- If it's a multiple of 5 it should log "This is a multiple of 5"
Hint: use the modulo operator (%) to figure out if it's a multiple of 3/5. Make sure the remainder is 0, in order to pass the condition.
Hint: the order of conditional statements is important!
*/

// Solution_1

function jackpotNum(){
  for (i=1; i<100; i++){
     
      if(i%3===0 && i%5===0){
          console.log("Jackpot!")
      }if (i%3===0){
          console.log("multiple of 3")
      }else if(i%5===0){
          console.log("This is a multiple of 5")
      }else{
        console.log(i);
      }
  }
} 
jackpotNum()





/*
2.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Creates a button element (with text "click me!") 
- Creates an empty <img> element and add it to the document.
- When the button is clicked, inserts an image URL into an <img> tag and remove the button
- Use the following image URL: https://avatars3.githubusercontent.com/u/20858568?s=200&v=4
*/



// Solution_2

function buttonFactory (){
  const btn = document.createElement('button');
  btn.textContent = 'click me!';
  document.body.appendChild(btn);

  btn.addEventListener('click', () => {
      const img = document.createElement('img');
      img.src = 'https://avatars3.githubusercontent.com/u/20858568?s=200&v=4';
      btn.style.display = 'none';
      document.body.appendChild(img)
  });
}
buttonFactory();
















/* 
3. 
Answer the following questions:
- What is an Application Programming Interface (API)? 
- How does this relate to your HackYourRepo project?
Explain each in 200 words or less. 
*/


// Solution_3

// The term API stands for “Application Programming Interface”.
// An API is therefore an interface that a software system provides in order to integrate it into other programs.
// It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc. 
// with an api key we get data from the source and we can handle that data in some kind of formats(Json?/text).
// By using the data which we get from the source we can create apps/web apps or web sites.  
// We  did  use Fetch API to our repo project.
//Fetch API is a promise-based JavaScript API for making asynchronous requests in the browser 
//similar to XMLHttpRequest (XHR). Unlike XHR, it is a simple and clean API that uses promises to provides a more powerful and flexible feature set to fetch resources from the server.



/*
4.
Write a function that:
- Makes an API call using the Fetch API
- Uses the following API: https://reqres.in/api/users
- Make use of async/await syntax
- Parses the response and then displays the "first_name" and "last_name" of the first THREE users within the DOM
- Creates an <ul> for each user
- Makes use of async/await
*/



// Solution_4

const url="https://reqres.in/api/users";
async function respons(){
    const res=await fetch(url)
    const data= await res.json()
    return data   
}
async function parsCreate(){
    try{
        const data=await respons();
        console.log(data)
        data.data.forEach(res => {
            let ul=document.createElement("ul");
            if(res.id<=3){
            
                document.body.appendChild(ul);
                ul.innerHTML = `<li>${res.first_name}</li> <li>${res.last_name}</li>`
                console.log(ul)
            }
        });
    } catch(err){
       console.error('something went wrong',err)
    }

}
parsCreate()




/*
5.
a) Create a class, called Person, that includes:
- A constructor method
- "name", "age", "home city" properties
- 1 additional method, called "getName", which returns the name
b) Instantiate the class, and give it your name + attributes
c) Explain how this class relates Object-Oriented Programming (OOP) in 100 words or less
*/

//Solution_5

class Person {
  constructor(name, age, homeCity) {
    this.name = name;
    this.age = age;
    this.homeCity = homeCity;
    this.getName = function()
    {
      return this.name;
    }
  }
}



let king = new Person ("Tjebbe", 27, "Amsterdam");
console.log(king.homeCity);

/*
b) In OOP a class is an extensible program-code-template for creating objects. 
We provide initial values while creating the class and then implement them (functions or methods).

Inheritance is a mechanism allows us to create a new class using the existing class. In the example above
we create a class called Person. It is like a template. We can create new classes by using our template class.

*/





/*
6. 
a) Implement the following JavaScript library: https://www.chartjs.org/
- Get a Bar chart working
- You may use the example data from the docs
b) Explain in 100 words or less your approach for implementing the library
*/



// Solution_6

/*
After installation(npm install chart.js --save):
First, We need to have a canvas in our page.
<canvas id="myChart"></canvas>

Secondly, we need to include Chart.js in our page.
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

Lastly, 
*/
const ctx = document.getElementById('myChart').getContext('2d');
let myBarChart = new Chart(ctx, {
 
 //type of chart
  type: 'horizontalBar',

  //our data
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45]
    }]
},

// Configuration options go here
  options: options
});

/*
b) Before the implementing the library; I did read the documentation and tried to understand what is this for?
As I understood; this is a JavaScript library for data visualization, which supports different types of chart.
In the documentation section I did search for Bar charts and picked one of them. I tried to understand data formats which 
I can use with the Bar charts...
*/
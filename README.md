# employee-directory

For this assignment I created an employee directory using React. This application uses a basic App.js page, that calls on the html routes, and then a Directory.js page that does most of the harder work. I used the useState react method to save the employees. Whenever the page loads, useEffect  method gets run. This method called on the load people method, so that all the correct employees were loaded into the database. This data was populated into a table, that was created through Bootstrap. Whenever one of the columns gets clicked on, the handleClick method gets called. This method organizes the array of employees based on whatever column was clicked. I used a few loops in order to organize the columns effectively: 

```
var newArray = [];
        for (var i = 0; i < directory.length; i++) {
            newArray.push(directory[i].name)
        }
        newArray = newArray.sort();
        var newerArray = [];
        for (var i = 0; i < newArray.length; i++) {
            for (var j = 0; j < directory.length; j++) {
                if (newArray[i] === directory[j].name) {
                    newerArray.push(directory[j])
                }
            }
        }
```

Here are the loops that I used in order to organize the array by name. I had to create a new array with the names of the objects in order, and then I had to reshuffle the array with objects into a new array. The time complexity of this method is not very efficient, but it was effective. 
I also added a search component to this project, so that when something was inputted into the search bar, it would update the data in the table accordingly. Below is a working demonstration of the project:

![](directory.gif)

## Getting Started

To get this project running, one must copy the files from the class repository.

### Prerequisites

To have this project run, one must download VS Code off the appstore, and create a GitHub account. Git is also required to run this program, which can be downloaded 

```
$ brew install git. 
```
Homebrew can also be downloaded by inputting the following command in the terminal:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### Installing

To install this project one must go through the GitHub website in order to clone this project. Clicking on the cone or download button and then copying the link that comes from that. One can then go into the Terminal application, and use the following command to copy the files:
`
git clone URL
`
This should then be moved to your desktop, or somewhere else on your computer. This will allow access to the html and css files. After running npm install in the terminal, the user can run the project with node server in the terminal.

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [React](https://reactjs.org/docs/getting-started.html)

## Deployed Link

* [See Live Site](https://aidansweeny.github.io/clicky-game/)

## Authors

* Aidan Sweeny

- [Link to Github](https://github.com/AidanSweeny)
- [Link to LinkedIn](https://www.linkedin.com/in/aidan-sweeny-81075030/)

## License

This project is licensed under the MIT License 

## Acknowledgments

* Berkley Coding Bootcamp




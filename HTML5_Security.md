# HTML5 Security Exercise 


## Description

In this HTML5 Exercise, we are doing to exploit a vulnerability in the local storage web API 

## Installation

Follow these steps to get the project up and running on your local machine:

1. Clone the repository:
    ```
    git clone https://github.com/yourusername/your-repo-name.git
    ```
2. Navigate to the project directory:
    ```
    cd your-repo-name
    ```
3. Create a virtual environment:
    ```
    python3 -m venv myenv
    ```
4. Activate the virtual environment:

    On Windows:
    ```
    myenv\Scripts\activate
    ```
    On Unix or MacOS:
    ```
    source myenv/bin/activate
    ```
5. Install the required packages:
    ```
    pip install -r requirements.txt
    ```
## Usage

*HTML5 Security Exercise*

The website implements a login function using local storage. 

1. Login with an account of your choice. 

    1 { username: 'Michael Scott', password: 'password' },           
    2 { username: 'Jim Halpert', password: 'dragon' },
    3 { username: 'Pam Beesly', password: 'superman' },
    4 { username: 'Dwight Schrute', password: 'zoominfo' },
    5 { username: 'Kevin Malone', password: 'password5' },
    6 { username: 'Walter White', password: 'PureMeth' },
    7 { username: 'Jesse Pinkman', password: '81207cH' },
    8 { username: 'Hank Schrader', password: 'DEA123' },
    9 { username: 'Gus Fring', password: 'El Pollero' },
    10{ username: 'Saul Goodman', password: 'BetterCallSaul' },
    11{ username: 'Skyler White', password: 'Marie' },
    12{ username: 'Paul Atreides', password: 'dune' },
    13{ username: 'John Doe', password: 'john123' },
    14{ username: 'Harry Potter', password: 'hogwarts' },
    15{ username: 'Hermione Granger', password: 'leviosa' },
    16{ username: 'Ron Weasley', password: 'quidditch' },
    17{ username: 'Jon Snow', password: 'winteriscoming' },
    18{ username: 'Arya Stark', password: 'valarmorghulis' },
    19{ username: 'Tony Stark', password: 'ironman' },
    20{ username: 'Peter Parker', password: 'spiderman' },

2. Split into pairs. 
Using reflected XSS, Try to steal your partner's token.
--> send your partner a link on slack to the website with the injection at first, start with a simple alert of the token. 

3. Using Codesandbox, Create an Node http server, send the token of the victim to your server. 
--> With the proper payload, after your partner clicked on the link, you should see the payload of the token, 
and the victim's ip address.


Final Stage Secure the Code
1. Eliminate the XSS 
2. Use an http only cookie instead of local storage for storing and accessing the JWT.



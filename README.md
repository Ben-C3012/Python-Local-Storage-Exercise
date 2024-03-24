# HTML5 Security Exercise 


## Description

In this HTML5 Exercise, we are going to exploit a vulnerability in the local storage web API.

## Installation

Follow these steps to get the project up and running on your local machine:

1. Clone the repository:
   
2. Navigate to the project directory:
    ```
    cd Python-Local-Storage-Exercise
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

    |   #   |     username     |    password    |
    |-------|-----------------|----------------|
    |   1   |  Michael Scott  |    password    |
    |   2   |   Jim Halpert   |     dragon     |
    |   3   |    Pam Beesly   |    superman    |
    |   4   |  Dwight Schrute |    zoominfo    |
    |   5   |   Kevin Malone  |   password5    |
    |   6   |  Walter White   |    PureMeth    |
    |   7   |  Jesse Pinkman  |    81207cH     |
    |   8   |  Hank Schrader  |     DEA123     |
    |   9   |    Gus Fring    |   El Pollero   |
    |   10  |  Saul Goodman   | BetterCallSaul |
    |   11  |  Skyler White   |     Marie      |
    |   12  |  Paul Atreides  |      dune      |
    |   13  |    John Doe     |    john123     |
    |   14  |  Harry Potter   |    hogwarts    |
    |   15  | Hermione Granger|    leviosa     |
    |   16  |   Ron Weasley   |   quidditch    |
    |   17  |    Jon Snow     | winteriscoming |
    |   18  |   Arya Stark    | valarmorghulis |
    |   19  |   Tony Stark    |    ironman     |
    |   20  |  Peter Parker   |   spiderman    |

2. Split into pairs. 
Using reflected XSS, Try to steal your partner's token.
--> Send your partner a link on Slack to the website with the injection at first and start with a simple alert of the token. 

3. Using Codesandbox, Create a Node http server, and send the token of the victim to your server. 
--> With the proper payload, after your partner clicks on the link, you should see the payload of the token, 
and the victim's IP address. Send a shortened URL that will scramble the original URL. 


Final Stage Secure the Code
1. Eliminate the XSS 
2. Use an http-only cookie instead of local storage for storing and accessing the JWT.



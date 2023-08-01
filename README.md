About the App
In the application, the user is required to input a positive number (excluding 0 and negative numbers). Upon entering the number, the application generates the Fibonacci series for that input. The application consists of two main components: Client and Server.

The Client component is built using React JS to render the front end. Users are initially directed to the home page named Home.js, accessible through any routing except (/fibbo/:id). React Router v6 is employed for routing. After entering a number, the Submit button becomes enabled, allowing the user to send a request.

Upon clicking the Submit button, the URL changes to /fibbo/number (:id is the number), leading to a new page called Fibbo.js. As this page loads, a request is sent to the server to generate the Fibonacci number for the provided input. The response obtained from the server is then displayed on the screen.

On the server side, Node.js backend and PostgreSQL are utilized for the database. The logic for generating the Fibonacci series has been entirely developed by the Me, without any assistance from external sources such as GPT. The implementation is based on dynamic programming.

The database contains two columns: 'id' and 'val'. The 'id' column stores the requested number, while the 'val' column stores the corresponding Fibonacci number at that sequence. By default, the database contains two values for 'id' 1 and 2, which represent 0 and 1 in the Fibonacci sequence, respectively.

When a user submits a number, it is obtained by the server, and the first query is sent to access the table with a specified limit, which is the submitted number. The output received from the query is stored in an array. The length of the array, i.e., the rowCount, is then compared with the retrieved number. If the length matches the retrieved number, the array is directly passed to the client. However, if the length is less than the retrieved number, further calculations are performed and saved to create an insert query for updating the database with additional Fibonacci numbers."

Steps to Retive:
Start with server :
1: cd server followed by "Enter"
2: npm i 
3: npm start 
Note the url for the sql is stored in server.js

Start with client:
1:  cd client followed by "Enter"
2: npm i
3: npm 





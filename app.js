const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (e.g., CSS, images) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page with UI
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Node.js App on Kubernetes</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f7f7f7;
          }
          header {
            background-color: #333;
            color: white;
            padding: 15px;
            text-align: center;
          }
          header h1 {
            margin: 0;
            font-size: 24px;
          }
          nav {
            display: flex;
            justify-content: center;
            background-color: #444;
            padding: 10px;
          }
          nav a {
            color: white;
            margin: 0 15px;
            text-decoration: none;
            font-size: 18px;
          }
          nav a:hover {
            background-color: #ddd;
            color: #444;
            padding: 5px 10px;
            border-radius: 5px;
          }
          .container {
            padding: 20px;
            max-width: 900px;
            margin: 20px auto;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          .container h2 {
            color: #333;
          }
          .btn {
            padding: 10px 20px;
            font-size: 18px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .btn:hover {
            background-color: #45a049;
          }
          footer {
            text-align: center;
            padding: 20px;
            background-color: #333;
            color: white;
            position: absolute;
            bottom: 0;
            width: 100%;
          }
        </style>
      </head>
      <body>
        <header>
          <h1>Welcome to the my Node.js App!</h1>
        </header>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
        <div class="container">
          <h2>My Node.js App Running on Kubernetes</h2>
          <p>My Node.js app deployed on Kubernetes create by Sandeep</p>
          <button class="btn" onclick="showAlert()">Click to Hello Me!</button>
        </div>
        <footer>
          <p>Kubernetes Application developed for CI CD Project</p>
        </footer>
        <script>
          function showAlert() {
            alert('Hello Everyone! Welcome to my Node.js app!');
          }
        </script>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


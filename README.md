<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><p>`# MERN Authentication App with JWT</p>
<p>This project demonstrates the implementation of a full-stack MERN application with user authentication. The backend is built using Node.js, Express, and MongoDB, with secure authentication via JSON Web Tokens (JWT). The frontend  is developed using React.js and can be hosted on Netlify for a seamless user experience.</p>
<h2 id="features">Features</h2>
<ul>
<li><strong>User Registration</strong>: Allows new users to create an account.</li>
<li><strong>User Login</strong>: Enables users to log in with their credentials.</li>
<li><strong>JWT Authentication</strong>: Secures user sessions using JSON Web Tokens.</li>
<li><strong>Protected Routes</strong>: Auth middleware ensures that only authenticated users can access specific routes.</li>
<li><strong>Responsive Design</strong> (optional): Frontend built with React.js to ensure a great user experience across devices.</li>
</ul>
<h2 id="technologies-used">Technologies Used</h2>
<h3 id="backend">Backend:</h3>
<ul>
<li><strong>Node.js</strong>: Runtime environment for executing JavaScript server-side.</li>
<li><strong>Express.js</strong>: Web application framework for building the API.</li>
<li><strong>MongoDB</strong>: NoSQL database to store user data.</li>
<li><strong>JWT</strong>: JSON Web Tokens for secure authentication.</li>
<li><strong>Bcrypt</strong>: For hashing and securing passwords.</li>
</ul>
<h3 id="frontend-bonus-task">Frontend (Bonus Task):</h3>
<ul>
<li><strong>React.js</strong>: Frontend library for building user interfaces.</li>
<li><strong>React Router DOM</strong>: For managing navigation in the application.</li>
<li><strong>Toastify</strong>: To display notifications and alerts.</li>
</ul>
<h2 id="installation">Installation</h2>
<h3 id="prerequisites">Prerequisites:</h3>
<ul>
<li>Node.js and npm installed.</li>
<li>MongoDB instance (local or cloud).</li>
</ul>
<h3 id="steps-to-setup">Steps to Setup:</h3>
<ol>
<li>
<p><strong>Clone the repository:</strong></p>
<pre class=" language-bash"><code class="prism  language-bash"><span class="token function">git</span> clone https://github.com/pintu544/BackendAuth

<span class="token function">git</span> clone https://github.com/pintu544/Frontendauth


</code></pre>
</li>
<li>
<p><strong>Install backend dependencies:</strong></p>
<p>bash</p>
<p>cd BackendAuth</p>
<p><code>npm install</code></p>
</li>
<li>
<p><strong>Install frontend dependencies :</strong></p>
<p>bash</p>
<p>cd Frontendauth<br>
npm install`</p>
</li>
<li>
<p><strong>Configure MongoDB and JWT:</strong></p>
<ul>
<li>Create a <code>.env</code> file in the root directory with the following variables:</li>
</ul>
<p>bash</p>
<p><code>MONGO_URI=your_mongodb_uri JWT_SECRET=your_jwt_secret</code></p>
<p>Replace <code>your_mongodb_uri</code> with your MongoDB connection string and <code>your_jwt_secret</code> with a secure random string for JWT authentication.</p>
</li>
<li>
<p><strong>Run the backend:</strong></p>
<p>bash</p>
<p><code>npm start</code></p>
</li>
<li>
<p><strong>Run the frontend :</strong> Open a new terminal and run:</p>
<p>bash</p>
<p><code>cd client npm run dev</code></p>
</li>
</ol>
<h2 id="usage">Usage</h2>
<ul>
<li>Navigate to <code>http://localhost:5173</code> to access the React frontend.</li>
<li>Sign up with new user details or log in using existing credentials.</li>
<li>Access protected routes by authenticating via JWT tokens.</li>
</ul>
<h2 id="project-structure">Project Structure</h2>
<ul>
<li><code>server/</code>: Contains the Express.js backend with authentication routes and middleware.</li>
<li><code>client/</code> : Contains the React.js frontend with login and signup pages.</li>
</ul>
<h2 id="api-endpoints">API Endpoints</h2>
<h3 id="auth-routes">Auth Routes:</h3>
<ul>
<li><code>POST /api/v1/signup</code>: Register a new user.</li>
<li><code>POST /api/v1/login</code>: Authenticate user and return JWT.</li>
<li><code>GET /api/v1/user</code>: Retrieve details of the authenticated user (protected).</li>
<li>
<ul>
<li><code>GET /api/v1/dashboard</code>: dashboard details of the authenticated user .</li>
</ul>
</li>
</ul>
<h3 id="protected-routes">Protected Routes:</h3>
<p>Use the <code>Authorization</code> header with the JWT token to access protected routes.</p>
<p>Example:</p>
<p>bash</p>
<p><code>Authorization: Bearer &lt;token&gt;</code></p>
<h2 id="deploying-the-frontend-url">Deploying the Frontend Url</h2>
<p><a href="https://signinregister.netlify.app/">https://signinregister.netlify.app/</a></p>
<h2 id="deploying-the-backend-url">Deploying the Backend Url</h2>
<p><a href="https://backendauth-s1uc.onrender.com">https://backendauth-s1uc.onrender.com</a></p>
</div>
</body>

</html>

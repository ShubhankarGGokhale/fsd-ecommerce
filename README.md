# fsd-ecommerce
Full Stack Hiring Challenge — E-commerce App using Fake Store API

# 🛒 FSD E-Commerce Website

This is a simple e-commerce web application built using **React JS**.  
It allows users to browse products, view detailed information, add items to the cart, and proceed to checkout.  
The project uses **Firebase Authentication** for login/signup and a **Fake Store API** for fetching product data.



##  Features

- Browse all available products  
- View detailed product descriptions  
- Add and remove items from the cart  
- Calculate total cart value  
- Checkout form with order summary  
- Firebase login and signup (user authentication)  
- Protected routes (only logged-in users can access Cart and Checkout)  
- Responsive design for better user experience  



##  Tech Stack

- **Frontend:** React JS (with Hooks, Context API, React Router)
- **Backend:** Fake Store API (https://api.escuelajs.co/api/v1/products)
- **Authentication:** Firebase Authentication
- **Styling:** CSS (custom + inline styles)
- **Package Manager:** npm



##  Setup Instructions to run Locally 


---

##  Setup Instructions (to run locally)

    ### 1️⃣ Clone the Repository

```bash
git "clone https://github.com/ShubhankarGGokhale/fsd-ecommerce.git"


    ### 2️⃣ Move into the Project Folder
    cd fsd-ecommerce

    ### 3️⃣ Install All Dependencies
    npm install

    ### 4️⃣ Firebase Configuration
    Create a Firebase project at Firebase Console
,
then enable Email/Password Authentication under “Sign-in methods”.

Replace the config in src/firebase.js with your own Firebase credentials:
            import { initializeApp } from "firebase/app";
            import { getAuth } from "firebase/auth";

            const firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_AUTH_DOMAIN",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_STORAGE_BUCKET",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
            };

            const app = initializeApp(firebaseConfig);
            export const auth = getAuth(app);


    ### 5️⃣ Run the Development Server
    npm start


    ### Now open your browser and visit:
    http://localhost:3000
    

    ### To Create a Production Build

    If you want to deploy the project (e.g., on Vercel or Netlify):
    "npm run build"
    This will create an optimized build folder ready for deployment


### Deployment 
You can deploy this app for free using Vercel:

Visit https://vercel.com

Sign in using your GitHub account

Click “New Project” → “Import GitHub Repository”

Select your repo: fsd-ecommerce

Click Deploy

After deployment, you’ll get a live URL like:
https://fsd-ecommerce.vercel.app

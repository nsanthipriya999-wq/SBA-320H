### 🦋 WANDER USA
Wander USA is a React web application that helps users discover and explore America's beautiful national parks. 

Users can explore parks by state, view park details, save favorite destinations, and visit official park websites to plan their next adventure. 

## Features

 - Home page with a featured national parks carousel
- Sticky navigation bar for easy access while scrolling
-  Explore national parks by state
-  Search and browse park information
-  Drag and drop functionality to explore parks by state.
-  View park images, descriptions, and details
-  Add and remove favorite parks
-  Favorites page to view saved destinations
-  Learn More links to official National Park Service websites
-  About page explaining the purpose of Wander USA
-  Contact page for user inquiries
-  Responsive card-based layout rolling
-  Featured parks carousel on the home page

## Technologies Used

## React
-Used to build reusable components and create a dynamic user interface.
   - Carousel
   - Footer
   - Nav
   - Park
   - ParkList
   - Place
   


## React Router
   Used to create navigation between pages.
     .Home
     .Explore
     .Favorites
     .About
     .ContactUs
     .NotFound

## React Hooks

### useState

Used to store and update component data, including:
 . Park information
 . Favorite parks
 . User selections

### useEffect

Used to handle side effects such as:
. Fetching park data from the API
. Loading information when components render

### useContext

Used to share favorite park data between components without passing props through multiple levels.


## JavaScript
   Used for:
    . Application logic
    . Data handling
    . User interactions
    . API requests

## CSS
 
 Used to design:
. Page layouts
. Navigation styling
. Park cards
. Carousel
. Sticky navbar
. Responsive design
. Nature-inspired color themes

### Vite

Wander USA was created using Vite as the development build tool.

Vite provides:
- Fast development server
- Quick updates during development
- Efficient production builds

 ### National Park Service API
 Wander USA uses the National Park Service API to retrieve:

. Park names
. Locations
. Descriptions
. Images
. Official park website links

Data is fetched asynchronously and displayed dynamically in the application.

### AJAX
Wander USA uses asynchronous JavaScript requests to communicate with an external API.

The application uses the 'fetch()' method to request national park data from the National Park Service API.

The data is retrieved without refreshing the entire page and is then displayed dynamically using React components.

A separate program api.js (services folder) handles the AJAX requests.

### Local Storage

Local storage is used to save users' favorite parks in the browser.

This allows users to:

-  Save favorite destinations
-  Keep favorites after refreshing the page
-  View saved parks later without logging in

### Approach Taken
Wander USA was developed using a component-based React approach.

The application structure includes reusable components and separate pages for different features.

The development approach included:

. Creating reusable React components for consistent layouts.
. Fetching national park data from an external API.
. Managing application data using React hooks.
. Using Context API to share favorite park information.
. Saving favorites with local storage.
. Designing a clean outdoor theme inspired by national parks.

The goal was to create a simple and enjoyable way for users to discover, save, and learn about national parks.


## Complex User Interface Features

Wander USA includes interactive UI modules to create a better user experience.

### Carousel
The Home page includes a featured parks carousel that allows users to browse multiple national parks in a horizontal scrolling layout.

### Sticky Navigation
The navigation bar uses a sticky position so it stays visible while users scroll through the website, making page navigation easier.



## Local Storage

Local storage allows the application to preserve user preferences without requiring a login system.


#  Installation Instructions

# Clone the repository:
git clone <your-repository-url>

# Install dependencies:
npm install

# Environment variables

 Get your own key from the National Park Service API and save it in .env file.

 -.env-example has the list of environment variables used in the project
 
# Start the development server:
npm run dev

Open the application in your browser using the local development URL.
http://localhost:5173

# Usage Instructions

1. Open Wander USA.
2. Use the navigation menu to explore different pages.
3. Visit the Explore page.
4. Select a state to view available national parks.
5. View park images, descriptions, and details.
6. Click **Explore More...** to visit the official park website.
7. Click **Add Favorite** to save parks.
8. Visit the Favorites page to view saved parks.
9. Visit the about page to know about Wander USA.
10. Visit the Contact us to leave feedback or queries if any.


# Live WebSite

Live Website:
https://wanderusa.onrender.com





#  Future Improvements

- Add interactive park maps
- Add weather information
- Add trip planning features
- Add user profiles
- Add more search and filtering options  

### Happy Exploring , Wandering with 🦋 Wander USA  &  Thank You for visiting! ✨
           

                 

              

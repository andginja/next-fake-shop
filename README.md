# andginja Fake Shop

This is a project that simulates a Shop, built with Next.js 13.

## Introduction

### The scope of this project is to build a React application that allows users to search and view products, and manage their cart by adding and removing products. The application should integrate with an E-commerce API, which provides the necessary endpoints to retrieve product data and manage the user's cart. The API documentation can be found [here](https://fakestoreapi.com/docs).

## Functional Requirements

- The application should have at least three pages: Home, Product Detail, and Cart.
- The Home page should display a list of products, which can be filtered by category and sorted by price or popularity.
- The Product Detail page should display information about a selected product, including its name, image, price, description, and related products.
- The Cart page should display the products currently in the user's cart, along with their quantity and total price. The user should be able to add or remove products from the cart on this page.
- The application should be responsive and display an optimal layout for different screen sizes.
- Interactive elements on the page should have hover states.
- Clicking on the large product image should open a lightbox gallery.

## Technical Decisions

### Framework (Next.js)

I decided to choose the Next.js framework, which is a base of React. I chose it because it is a very performant and well designed framework, when compared to the typical Create React App approach. The traditional Create React App approach is nowadays a very incomplete solution, since it poses a lot of security risks, as well as some maintenance issues.

### Cart (Context API)

One of the requirements of this project was to host a cart feature.
For this reason, I took the decision to implement a Shop Context API in order to keep and update the query state at all times within the application. Using this Context allows for a seamless and generalized use of this logic across the application, by calling the useContext hook. All methods within the context are globally available, allowing for a better cart management.

### API Calls (React Query)

Considering the above-mentioned factor of code reusability through the Shop Context API, it also made sense to centralize/generalize the way in which we would fetch, process, and store data.
For this reason, using the React Query library was a no-brainer, since it is able to deliver performant fetch executions, while also keeping it cached in the system. The overall result of this approach takes us to a very performant and efficient solution, thanks to React Query's amazing capabilities.

### Custom Hooks (useLocalStorage)

Instead of using the provided API mocks for the cart, I decided to implement a custom hook that worked in coordination with the Shop Context API in order to persist cart data. This custom hook is able to retrieve and add data to the LocalStorage, through the methods in the Context API call.

### Styling (Styled-components)

The styling technique chosen for this project was the Styled Components library, since it allows for component reutilization and it is a quite efficient styling solution. One of the advantages of this approach is to use props in the styling, which was used during this project.

### Testing (Jest)

For Unit testing, and to also cover a bonus requirement of the project, I decided to implement a Jest testing solution, covering all components while keeping their testing limited to their scope.

### Running the project (Local and Docker)

To run the project, running it locally only involves running the following commands:
npm run dev for the dev environment.
npm run build + npm run start for the production environment.

This project also features two different dockerfiles, one for reach of the above-mentioned environments.
To run them, the following commands should apply:

0. Docker should be active in the system
1. docker build -f Dockerfile.<prod or dev> -t next-fake-shop:<prod or dev> .
2. docker run -it -p 3000:3000 next-fake-shop:<prod or dev>

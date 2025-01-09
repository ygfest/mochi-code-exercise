# Mochi Exercise Checkout System(Stefano San Esteban's submission)

A Mochi Software Engineering Intern Application Assessment Test built by Stefano San Esteban.

---

## **Description**

This project is a simple shopping cart system, part of the Mochi Software Engineering Intern Application Assessment. The application showcases products from a JSON file and allows users to add them to a shopping cart, view the cart, and apply promotional discounts based on the total cart value.

---

## **Features**

- **Products Showcase Page**: Displays products fetched from a JSON file. Each product has details such as name, price, and a unique identifier.
- **Shopping Cart**: Users can add products to their cart, view the products in the cart, and see a calculated total price. Users can also remove items from the cart and see the discount applied when certain price thresholds are reached.
- **Discount Logic**: Discount applied based on the total cart value:
  - 20% off for totals greater than $100.
  - 15% off for totals greater than $50.
  - 10% off for totals greater than $20.

---

## **Technologies**

- **Next.js**
- **TypeScript**
- **Tailwind CSS**

---

## **Design Decisions**

1. **Component Structure**: The project follows a component-based structure, keeping each component focused on a single responsibility (e.g., product display, cart items, cart total).
   - I created a **`products`** directory where I defined a component that handles the product details. This component is a client-side component and is mounted inside a server-side component in the `page.tsx` of the **`products`** directory.
   - Within this directory, I also added a custom **`layout`** specifically for the products page, which includes the **ShoppingCartProvider** from the context API to manage the shopping cart state globally across the components.
   - I created an error or fallback page for unknown routes and paths to handle cases where users may navigate to a non-existent route.
2. **Currency Formatting**: To display product prices in USD, I created a utility to format currency in dollars, ensuring consistency across the app. The utility is designed to handle numbers and format them as currency with the `$` symbol and appropriate comma separators.

3. **Tailwind CSS**: For styling, I used plain **Tailwind CSS** without any additional libraries. This allowed me to customize the classes according to the project's requirements, ensuring a unique and tailored design.

4. **State Management**: I used React context (`useShoppingCart`) for managing the cart state globally across components.

---

## **Getting Started**

To get started with the project, follow the steps below:

### 1. Clone the Repository

git clone https://github.com/ygfest/mochi-code-exercise.git

### 2. Install Dependencies

cd mochi-code-exercise
npm install

### 3. Run the Development Server

npm run dev

---

## **Contact**

For more information or questions, feel free to reach out to me at stefanosanesteban1018@gmail.com.

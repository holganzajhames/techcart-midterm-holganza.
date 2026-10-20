# TechCart demo and review guide

## Two-minute walkthrough

“Good day. I am Jhames Emmanuel R. Holganza, and this is TechCart, an e-commerce concept store for gadgets and accessories. My assigned theme is E-Commerce & Retail because my surname starts with H.

The application uses React for components, navigation and state, and Tailwind CSS for responsive styling. It runs entirely in the browser.

On the home page, users can view featured products and explore the workspace collection. In the shop, they can search for a product, select a category, filter by price, and sort the results. These controls work together.

Selecting a product opens its details. Users can adjust quantity and add it to their bag. The bag supports quantity updates and removal, and automatically calculates delivery and total cost. It persists when the page is refreshed.

Checkout validates the delivery form and creates a simulated order. It does not process payments or send real orders.

My class diagram includes Product, CartItem, Cart, Customer, Order and StoreContent. Cart owns its cart items, each item references a product, and an order takes an independent snapshot of the items. The interface gets its content from class models and centralized objects rather than hardcoded component text.”

## Checks before submitting

- Open each navigation link, then use browser Back and Forward.
- Search for `wireless`, choose Audio, sort by price, and confirm results.
- Select a filter combination with no results; reset filters.
- Visit a product page, change quantity, add it, and check the bag badge.
- Add the same item again; confirm one line with increased quantity.
- Increase quantity to stock; confirm it cannot exceed stock.
- Check PHP 150 delivery below PHP 3,000, and free delivery above it.
- Refresh the page and confirm the bag remains.
- Remove all products and check the empty-bag state.
- Use sample details in checkout: Sample Customer, sample@example.com, 09123456789, 123 Sample Street, Cebu City, 6000.
- Try incomplete fields and an invalid phone number; confirm validation.
- Place a demo order; confirm its total and that the bag clears.
- Check a narrow mobile viewport and the mobile menu.
- Open `#/product/missing` and `#/missing` to check fallback states.
- Ensure your GitHub repository is accessible and Figma sharing allows viewing.

## Explain the code

React state triggers re-rendering when filters or the bag change. Filter results are derived from the Product instances. Cart mutations operate on a rehydrated model so React receives a new object. The storage format holds product IDs and quantities, then restores class instances from the catalog. Order items are copied so later bag changes cannot alter the order snapshot.

The four automated model tests cover stock limits and merging, delivery/totals, storage restoration, and independent order snapshots. Browser interaction checks must also be performed locally if browser QA is unavailable in this environment.

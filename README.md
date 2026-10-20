# TechCart

A responsive gadget and accessories concept store by **Jhames Emmanuel R. Holganza**, BSIT 3, Cebu Institute of Technology.

## Midterm practical exam

Theme: E-Commerce & Retail (Holganza, G–L). Built with **React.js + Tailwind CSS**. Vite is the development/build tool; all behavior runs in the browser. There is no backend, database, payment integration, CSS framework, or component library. Lucide provides SVG icons. Original SVG illustrations are included in source.

## Run locally

Install Node.js 22.13+ (22 LTS recommended), then:

```bash
npm install
npm run dev
```

Open the Local URL printed in the terminal. To verify and build:

```bash
npm test
npm run build
npm run preview
```

`npm ci` may be used instead of `npm install` after the first checkout because a package-lock.json is supplied.

## Pages and behavior

| Route | Features |
| --- | --- |
| `#/` | Home, featured products, category collection CTA |
| `#/shop` | Live search, category filters, price filters, sorting, no-results state |
| `#/product/aura-headphones` | Dynamic product details, quantity, stock limits, add to cart |
| `#/cart` | Quantity updates, remove item, subtotal, delivery, total, empty state |
| `#/checkout` | Required delivery fields, email/phone/postcode checks, demo order confirmation |
| `#/about` | Store story, project information, fictional-data notice |

Hash navigation works on static hosts without server rewrite rules. Browser back/forward works. Shopping bag contents persist in localStorage; customer delivery details do not. Confirmation is session-only and resets on refresh. Invalid product and page routes show fallback states.

## Object-oriented structure

- `Product`: item details and computed discount.
- `CartItem`: product reference, quantity, computed line subtotal.
- `Cart`: collection, add/update/remove, stock limits, totals, serialization and hydration.
- `Customer`: delivery information.
- `Order`: independent snapshot of cart items, customer, totals, reference and status.
- `StoreContent`: shared UI text and page configuration.

All visible copy comes from `src/data.js` through class instances and objects. Components bind to that data rather than writing product names, descriptions or labels as JSX text. Tailwind utility classes provide styling; `src/index.css` contains only the Tailwind import. Diagram relationships match `src/models.js`.

## Files to review

- `src/models.js`: OOP models and business logic.
- `src/data.js`: Product instances and centralized UI content.
- `src/main.jsx`: React components, hash navigation, state and interactive pages.
- `src/Art.jsx`: Original product illustrations.
- `docs/class-diagram.pdf`: Submission-ready class diagram.
- `docs/class-diagram.drawio`: Editable diagram for diagrams.net.
- `docs/class-diagram.mmd`: Mermaid class source.
- `docs/design/`: Editable SVG screen layouts for Figma import and design specifications.
- `docs/DEMO-GUIDE.md`: Short presentation guide and manual checks.

## Business rules

1. Bag quantities are whole numbers between 1 and a product's stock.
2. Adding the same product increases its existing quantity up to stock.
3. Delivery is PHP 150 below PHP 3,000; free at PHP 3,000+ or for an empty bag.
4. Each line subtotal is unit price × quantity; total is subtotal + delivery.
5. Checkout requires a non-empty bag and delivery details.
6. Phone format is 09 followed by 9 digits, with optional spaces/hyphens; postcode is 4 digits.
7. Placing a demo order snapshots the bag before clearing it.
8. All products, prices, reviews and availability are fictional. Nothing is shipped or charged.

## Submission links

- GitHub: https://github.com/holganzajhames/techcart-midterm-holganza.
- Figma: https://www.figma.com/design/FQR7DgY7qnRgm8QNaK03Jp (eight editable screens and linked navigation; enable Anyone with the link → Can view before submission).
- Live preview: https://techcart-holganza.calmchime4.chatgpt.site (private preview; not a substitute for your required repository).

Use the final GitHub and Figma links once created. Enable view permissions on Figma and make the repository public or accessible to your instructor. This repository contains the standalone React application and submission documents.

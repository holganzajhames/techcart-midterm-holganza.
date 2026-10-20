# TechCart Figma layout pack

Native Figma file: https://www.figma.com/design/FQR7DgY7qnRgm8QNaK03Jp

The native file includes eight editable screens, reusable components and prototype navigation. Native typography uses Arimo as an Arial-compatible substitute because Arial is unavailable in the Figma runtime. Sharing permissions still need verification.

These eight high-fidelity SVG layouts are editable vector designs, not screenshots. They match the application’s cream/orange/olive palette, typography hierarchy, products, page structure and checkout journey. They are retained as editable local source layouts alongside the native Figma file.

## Import into Figma

1. Create a Figma **Design** file named `TechCart — Holganza Midterm`.
2. Drag `01-Home-Desktop.svg` through `08-Home-Mobile.svg` onto the canvas. Keep the assets folder for optional individual product edits.
3. If needed, select each imported group and choose **Frame selection**. Name the frames to match their files.
4. Arrange desktop frames in a row and mobile Home underneath. Keep the original frame dimensions.
5. For a clickable prototype, link Home’s main button to Shop; product cards to Product; Add to bag to Cart; Continue to checkout to Checkout; Place demo order to Confirmation. Link the navigation labels and back links to their matching frames.
6. Prototype behavior in Figma demonstrates navigation. Search, filtering, cart state and validation are implemented in the React application.
7. Click **Share**, choose **Anyone with the link → Can view** if permitted by your account, and copy the link. Verify it in a signed-out/private window before submission.

## Design system

| Token | Value |
| --- | --- |
| Canvas | #F7F7F0 |
| Main text | #263126 |
| Muted text | #6C7268 |
| Main action | #EA6737 |
| Hero surface | #DCE5CE |
| Secondary surface | #E6E8DC |
| Divider | #D3D9CB |
| Desktop canvas | 1440 px; content max 1200 px |
| Mobile canvas | 390 px; 22 px margins |
| Typeface | Arial/system sans-serif |
| Hero heading | Desktop 73 px; mobile 43 px |
| Page heading | Desktop 42 px |
| Body | 14–16 px; line height 1.7–2 |
| Product card corners | 18 px |
| Main buttons | Rounded pill; 48 px height |

## Layout and states

- Home: hero, featured product, benefit row, product cards, workspace collection and footer.
- Shop: search, price filter, sorting, categories, result count and responsive product grid.
- Product: illustration, product details, pricing, stock, quantity, add to bag and related products.
- Cart: editable product rows, subtotal, delivery, total and checkout action.
- Checkout: demo notice, delivery fields, payment description and summary.
- Confirmation: success message, sample reference, sample destination and total.
- About: store story, values and student-project disclosure.
- Mobile Home: stacked hero and two-column product cards. The application also has responsive layouts for all other routes.

The illustrated filled bag contains one Aura Headphones and one Glide Mouse: PHP 3,380 total with free delivery. The reference and delivery details on Confirmation are sample design content.

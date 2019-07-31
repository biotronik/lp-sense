# BIOTRONIK Tailwind Starter

A simple starter project for developing a video Marketo landing page.

To get started:

1. Clone the repository:

   ```bash
   git clone https://github.com/biotronik/tailwind-starter.git <Project Name>

   cd <Project Name>
   ```

2. Install the dependencies:

   ```bash
   # Using npm
   npm install
   ```

3. Start the development server:

   ```bash
   # Using npm
   npm start
   ```

   Now you should be able to see the project running at localhost:8080.

4. Open `public/index.html` in your editor and start experimenting!

## Building for production

Uses [Purgecss](https://www.purgecss.com/) and [cssnano](https://cssnano.co/) to optimize your CSS for production.

To build an optimized version of your CSS, simply run:

```bash
# Using npm
npm run production
```

After that's done, check out `./public/build/tailwind.css` to see the optimized output.

Copy and paste the markup from `public/index.html` into a Guided Marketo landing page template. In Marketo, in the head section, delete

```bash
<link rel="stylesheet" href="/build/tailwind.css" />
```

Replace with:

```bash
<style>
[tailwind css styles go here]
</style>
```

# [My Portfolio Website](https://jstamant.com/portolio)



Here's the repository for my [personal portfolio website](https://jstamant.com/portfolio).

This website is a static site generated by [Next.js](https://nextjs.org/).
I chose *Next.js* because of the unique nature of the website.
Because this site has the potential to serve all sorts of different content, I figured using *Next* would be a good solution.
This site does not serve content the way a CMS does (using layouts/templates for many pages), a more app-like approach would better serve this portfolio site.
The site also uses [Tailwind CSS](https://tailwindcss.com/) for CSS styling.

![screenshot](/screenshot.png)

I could've used plain HTML with a CSS framework, but I went with *Next* to support the variety of content that might end-up on this website, as well as support any interactivity I might want to add.

The inspiration for the design comes from [Ram Maheshwari](https://www.rammaheshwari.com/)'s [Dopefolio](https://github.com/rammcodes/dopefolio) template.

## Running

To work on the website in development, run:

```
npm run dev
```

## Building & Deploying

To build the website, run:

```
npm run build
```

This will generate the `out/` folder, which you can easily deploy to any web server, or to Netlify or GitHub pages.

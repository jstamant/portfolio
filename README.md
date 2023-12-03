# [My Portfolio Website](https://jstamant.com/portolio)

Here's the repository for my [personal portfolio
website](https://jstamant.com/portfolio).

This website is a static site generated by [Hugo](https://gohugo.io/). I figured
this would be the best option for making a portfolio site, as using a platform
like `Next.js` would be overkill for making such a simple, non-interactive site.
The site also uses [TailwindCSS](https://tailwindcss.com/) as a CSS framework.

![screenshot](/screenshot.png)

I could've used plain HTML with a CSS framework, but I went with Hugo to
separate the markdown from the content. ...Which is probably overkill for a
single-page site...

The inspiration for the design comes from [Ram Maheshwari](https://www.rammaheshwari.com/)'s
[Dopefolio](https://github.com/rammcodes/dopefolio) template.

## Running

To work on the website in development, run the following commands in separate
processes:

```
npm run tailwind
npm run hugo
```

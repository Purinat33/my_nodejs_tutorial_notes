# API vs SSR

In ExpressJS, we either use it to setup API, or templates with Server Side Rendering (SSR)

- API (for Express/HTTP case):
    - Setting up an HTTP interface to interact with our data. Data are in the form of JSON
    - Send DATA
    - res.json()

- SSR:
    - Send in the form of pure HTML template
    - Send TEMPLATE
    - res.render()

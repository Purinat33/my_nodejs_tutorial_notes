# API vs SSR

In ExpressJS, we either use it to setup API, or templates with Server Side Rendering (SSR)

- API (for Express/HTTP case):
    - Setting up an HTTP interface to interact with our data. Data are in the form of "JSON" (JavaScript Object Notation)
    - Send DATA
    
    ```js
    res.json()
    ```
    this method will do all the heavy lifting for us

- SSR (Server Side Rendering):
    - Send in the form of pure HTML+CSS+JavaScript templates
    - Send TEMPLATE
    
    ```js
    res.render()
    ```

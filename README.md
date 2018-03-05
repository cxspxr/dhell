# Diffie-Hellman Key Exchange Simple End-to-End Chat in NodeJS
Just a simple example of how `Diffie-Hellman Key Exchange` can be implemented in End-to-End Chat.

## Installation
Make sure you have **free** `:3000` in order to run `express` server. Otherwise,  
change the `port` constant inside the `express.js`.  

```bash
    npm i
```

## Usage
I've set up chat with `GET` routes, just to make things simple and to emphasize  
publicity of distribution channels.  

There are two participants called `alice` and `bob`. You can find them in `express.js` file.  
So you can navigate to one of these URLs using the showcase with `axios` in `express.js`  
or using your browser:  

* `/send/message/:from/:to/:message` - sends a message. `:from` is the name `alice` or `bob`  
(or yours, if you set it up), `:to` is the name of **another** chat participant and the  
`message` is the message
* `/send-public-key/:from/:to` - sends a public `Diffie-Hellman` key from `:from` (e.g. `alice`)  
to `:to` (e.g. `bob`). This public key is then used to generate the common secret key, using  
a private key
* `/inbox/:whose` - show an inbox of `:whose` (e.g. `alice`)

## Logging
Also I am logging all things to the terminal, so you are able to not use your browser.

# Final Activity 1

## Steps

1. Initializing repository
```npm init -y ```
2. Installing required packages
```npm i express,path,plot.ly```
3. Draw your plot.
```js
# instantiate plotly
# define data
# graph options
# graph plot
```
4. Setup express scripts
```js
const path = require('path')
const express = require('express')
const app = express()

app.get('/',function(req,res) {
    // plotly scripts here
})

const PORT = process.env.PORT || 5000
app.listen(PORT)

console.log(`server running on ${PORT}`)
```
5. Deploy to Heroku
```js
# Install Heroku CLI
> heroku --version
> heroku login
Logging in... done
Logged in as jyee_180000001103@uic.edu.ph
>heroku create jyee
Creating ⬢ jyee... done
https://jyee.herokuapp.com/ | https://git.heroku.com/jyee.git
> git push heroku master
> heroku open
```
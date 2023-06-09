import express from "https://esm.sh/express@4.18.2";
const app = express()
const port = 3000||process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const axios = require('axios')
const app = express()
const port = 3333

const getUser = () => {
  return axios.get('https://mamba.alibaba-inc.com/api/share/bucUser?keyword=sd')
}

app.get('/user', (req, res) => {
  console.log(req)

  getUser().then((data) => {
    console.log(data.data)
    res.send(data.data)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

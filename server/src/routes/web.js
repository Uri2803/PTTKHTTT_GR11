import express from 'express'
import * as homeController from '../controllers/homeControler'
import * as companyControler from '../controllers/companyControler'
let route=express.Router()

let initWebRoutes = (app) => {

  app.get('/', (req, res) => {
    res.json({ message: 'mainpage' })
  })

  app.post('/login', homeController.login)

  app.post('/createcompany', companyControler.CreateCompany)
  app.get('/getcompanyinfor', companyControler.GetCompanyInfor)
  
  return app.use('/', route)
}

module.exports = initWebRoutes
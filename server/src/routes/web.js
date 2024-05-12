import express from 'express'
import * as homeController from '../controllers/homeControler'
import * as companyControler from '../controllers/companyControler'
import * as middlewares from '../controllers/middlewares';
import * as candidateControler from '../controllers/candidateControler'
import * as employeeControler from '../controllers/emloyeeControler'
let route = express.Router()

let initWebRoutes = (app) => {

  app.get('/', (req, res) => {
    res.json({ message: 'mainpage' })
  })
  app.post('/login', homeController.login)

  app.get('/login', homeController.login)

  app.post('/createcompany', companyControler.CreateCompany)

  app.get('/getcompanyinfor', companyControler.GetCompanyInfor)

  app.get('/getallposting', homeController.getAllPosting)

  app.get('/getjobdetail', homeController.getJobDetail)

  app.post('/createcandidate', candidateControler.createCandidate)

  app.post('/createCV', candidateControler.createCV)

  app.post('/findinfor', candidateControler.findInfor)

  app.get('/getallcompany', employeeControler.getAllCompany)

  app.post('/getregistform', employeeControler.getRecruimentRegist)

  app.post('/getposting', employeeControler.getPosting)

  app.post('/searchcompany', employeeControler.searchCompany)

  app.post('/getcompanybyid', employeeControler.getCompanyByID)

  app.post('/createrecruimentregist', employeeControler.createRegistForm)

  app.post('/cruimentregistform', employeeControler.getRecruimentRegistByID)

  return app.use('/', route)
}

module.exports = initWebRoutes
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
// import SequelizeStore from 'connect-session-sequelize', query
import { testConnection} from './database/db.js'
import router from './route/index.js'
import session from 'express-session'

const app = express()

// const sessionStore = SequelizeStore(session.Store)
// const store = new sessionStore({
//     db: query
// })

dotenv.config()
app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
<<<<<<< HEAD
    // store: store,
=======
>>>>>>> b5dd2b3cfca9809f902db63bfbcbb06005c2171e
    cookie: {
        source: 'auto'
    }
}))
app.use(cors())
app.use(express.json())

app.use(router)
// app.get('/', (req, res) =>{
//     return res.json("dari backend")
// })

app.listen(process.env.APP_PORT, ()=>{
    testConnection()
    console.log(`Server is running at http://localhost:${process.env.APP_PORT}`)
})
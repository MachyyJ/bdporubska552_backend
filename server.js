require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// BodyParser Middleware
app.use(express.json())
app.use(cors())

// Routes
const announcementRoutes = require('./routes/api/announcement')
const tagRoutes = require('./routes/api/tag')

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err))

app.use('/api/announcement', announcementRoutes)
app.use('/api/tag', tagRoutes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnnouncementSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    content: {
        type: String,
        required: true,
    },
    publishedAt: {
        type: Date,
        required: false,
    },
    tags: {
        type: [String],
        required: false,
    }
})

module.exports = mongoose.model('Announcement', AnnouncementSchema)
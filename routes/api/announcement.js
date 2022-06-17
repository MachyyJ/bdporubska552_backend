const express = require('express')
const router = express.Router()

// Announcement model
const Announcement = require('../../models/Announcement')

// @ Routes GET api/announcement/:id
router.get('/:id', async (req, res) => {
    try {
        const announcement = await Announcement.findById(req.params.id)
        if (!announcement) throw Error('No announcement here!')
        res.status(200).json(announcement)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

// @ Routes GET api/announcement
router.get('/', async (req, res) => {
    try {
        const announcements = await Announcement.find()
        if (!announcements) throw Error('No announcements here!')
        res.status(200).json(announcements)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

// @ Routes POST api/announcement
router.post('/', async (req, res) => {
    const newAnnouncement = new Announcement(req.body)
    try {
        const announcement = await newAnnouncement.save()
        if(!announcement) throw Error("Something went wrong while saving up the announcement")
        res.status(200).json(announcement)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

// @ Routes DELETE api/announcement/:id
router.delete('/:id', async (req, res) => {
    try {
        const announcement = await Announcement.findByIdAndDelete(req.params.id)
        if(!announcement) throw Error("No announcement found!")
        res.status(200).json({ success: true })
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

// @ Routes UPDATE api/announcement/:id
router.patch('/:id', async (req, res) => {
    try {
        const announcement = await Announcement.findByIdAndUpdate(req.params.id, req.body)
        if(!announcement) throw Error("Something went wrong while updating announcement!")
        res.status(200).json({ success: true })
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

module.exports = router
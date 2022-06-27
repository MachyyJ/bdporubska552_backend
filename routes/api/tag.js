const express = require('express')
const router = express.Router()

// Tag model
const Tag = require('../../models/Tag')

// @ Routes GET api/tag
// @ Desc Gets tags
router.get('/', async (req, res) => {
    try {
        const tags = await Tag.find()
        if (!tags) throw Error('No tags here!')
        res.status(200).json(tags)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

// @ Routes POST api/tag
// @ Desc Creates new tag
router.post('/', async (req, res) => {
    const newTag = new Tag(req.body)
    try {
        const tag = await newTag.save()
        if(!tag) throw Error("Something went wrong while saving up the tag")
        res.status(200).json(tag)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

// @ Routes DELETE api/tag/:id
// @ Desc Removes tag
router.delete('/:id', async (req, res) => {
    try {
        const tag = await Tag.findByIdAndDelete(req.params.id)
        if(!tag) throw Error("No tag found!")
        res.status(200).json({ success: true })
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

// @ Routes UPDATE api/tag/:id
// @ Desc Updates tag
router.patch('/:id', async (req, res) => {
    try {
        const tag = await Tag.findByIdAndUpdate(req.params.id, req.body)
        if(!tag) throw Error("Something went wrong while updating tag!")
        res.status(200).json({ success: true })
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

module.exports = router
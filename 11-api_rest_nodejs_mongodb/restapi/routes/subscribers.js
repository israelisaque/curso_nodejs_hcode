const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const subscriber = await Subscriber.findById(id)
        if (subscriber == null) {
            return res.status(404).json({message: 'Subscriber not found!'})
        }
        res.json(subscriber)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
})

router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        userName: req.body.userName,
        userChannel: req.body.userChannel
    })

    try {
        const newSubscriber = await Subscriber.insertMany([subscriber])
        res.status(201).json(newSubscriber)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const subscriber = await Subscriber.findById(id)
        if (subscriber == null) {
            return res.status(404).json({message: 'Subscriber not found!'})
        } else if (req.body.userName && req.body.userChannel != null) {
            await Subscriber.findByIdAndUpdate(id, {
                userName: req.body.userName,
                userChannel: req.body.userChannel
            })
            res.json(await Subscriber.findById(id))
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }  
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const subscriber = await Subscriber.findById(id)
        if (subscriber == null) {
            return res.status(404).json({message: 'Subscriber not found!'})
        }
        await Subscriber.findByIdAndDelete(id)
        res.json({message: 'Subscriber was deleted!'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


module.exports = router
import express from 'express'
import personRepository from '../../repositories/person-repository'

const personRouter = express.Router()

personRouter.get('/:id', (req, res, next) => {

    try {
        const id = req.params.id
        const params = req.body.params

        personRepository.findPerson(id, params)
            .then(personResponse => {
                res.json(personResponse)
            })

    } catch (err) {
        next(err)
    }
})

personRouter.post('/', (req, res, next) => {

    try {
        const { name, email } = req.body

        personRepository.createPerson(name, email)
            .then(personResponse => {
                res.json(personResponse)
            })
    } catch (err) {
        next(err)
    }
})


export default personRouter
const mongo = require('./mongo')
const avengerSchema = require('./schemas/avenger-schema')

const connectToMongoDB = async () => {
    await mongo().then(async (mongoose) => {
        try {
            console.log('Connected to mongodb!')

            const avenger = {
                name: 'Thor Odinson',
                title: 'God of Thunder',
                country: 'USA'
            }

            await new avengerSchema(avenger).save()

        } finally {
            mongoose.connection.close()
        }
    })
}

connectToMongoDB()
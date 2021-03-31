import mongoose from 'mongoose'

const connectDB = async () => {
    console.log('-----------------Attempting connection')
    try {
        //database Name
        const databaseName='MovieList';
        const con = await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
        console.log('-----------------Connection success')
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.log('-----------------Connection failure')
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
    console.log('-----------------Done')
}

export default connectDB
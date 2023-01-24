import mongoose from 'mongoose';

const materialsSchema = mongoose.Schema({
    title: String,
    image: File,
    description: String,
});

const Materials= mongoose.model('Materials', materialsSchema);

export default Materials; 
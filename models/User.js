const mongoose = require ('mongoose');
const Schema = mongoose.Schema({
    email : {
        type: String,
        required: true,
        lowercase: true,
        index: true
    },
    passwordHash : {
        type: String,
        required: true
    }
}, {timestamps: true}

)



// export default mongoose.model("User", Schema);
module.exports = User = mongoose.model('User', Schema);
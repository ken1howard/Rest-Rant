const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)





/*module.exports = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3333,w_5000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/SOI-courtesy_copy_q6fydr.jpg'
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://cdn-p300.americantowns.com/img/article/az-bakery-1.jpg'
}]*/
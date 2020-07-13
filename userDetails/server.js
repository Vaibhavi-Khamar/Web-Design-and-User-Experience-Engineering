const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const { User } = require('./models/user')
const { Product } = require('./models/product')

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());


//----------------------------------------------Connecting to the database-------------------------------------------------//

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


//-----------------------------------------------------CREATE User---------------------------------------------------------//

app.post('/user/create', (req, res) => {
    let psw = req.body.password;
    var pswRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var validpsw = pswRegex.test(psw);
    let email_address = req.body.email;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var validemail = emailRegex.test(email_address);
    if (!psw || !email_address) {
        console.log("Please provide all required fields - password & email_address...")
        res.status(400).send({
            Message: "Please provide all required fields - password & email_address"
        });
    } else if (!validemail) {
        console.log("Please enter valid email address!...")
        res.status(400).send({
            Message: "Please enter valid email address!"
        });
    } else if (!validpsw) {
        console.log("Please enter strong password...")
        res.status(400).send({
            Message: "Please enter strong password"
        });
    } else if (psw.length < 8) {
        console.log("Password should be minimum of 8 characters...")
        res.status(400).send({
            Message: "Password should be minimum of 8 characters"
        });
    } else {
        const user = new User({
            email: req.body.email,
            password: req.body.password
        }).save((err, response) => {
            if (err) res.status(400).send(err)
            console.log("------------ USER CREATED ------------")
            console.log(response)
            res.status(200).json(response)
        })
    }
})


//----------------------------------------------------CREATE Product------------------------------------------------------//

app.post('/user/:email/product', (req, res) => {
    let email_address = req.params.email;
    //console.log(email_address);
    User.findOne({ 'email': req.params.email }, (err, user) => {
        if (!user) {
            res.status(401).send({ Message: "Unauthorized" });
        } else {
            let name = req.body.product_name;
            let price = req.body.product_price;
            if (!name || !price) {
                console.log("Please provide all required fields - product_name & product_price...")
                res.status(400).send({
                    Message: "Please provide all required fields - product_name & product_price"
                });
            } else {
                const product = new Product({
                    product_name: req.body.product_name,
                    product_price: req.body.product_price
                }).save((err, response) => {
                    if (err) res.status(400).send(err)
                    console.log("------------ PRODUCT CREATED ------------")
                    console.log(response)
                    res.status(200).json(response)
                })
            }
        }
    });
})


//----------------------------------------------------UPDATE Product-----------------------------------------------------//

app.put('/user/:email/product/:productId', (req, res) => {
    User.findOne({ 'email': req.params.email }, (err, user) => {
        if (!user) {
            res.status(401).send({ Message: "Unauthorized" });
        } else {
            let name = req.body.product_name;
            let price = req.body.product_price;
            if (!name || !price) {
                console.log("Please provide all required fields - product_name & product_price...")
                res.status(400).send({
                    Message: "Please provide all required fields - product_name & product_price"
                });
            } else {
                Product.findByIdAndUpdate(req.params.productId, {
                    product_name: req.body.product_name,
                    product_price: req.body.product_price
                }, { new: true })
                    .then(response => {
                        if (!response) {
                            console.log("Product not found with id " + req.params.productId)
                            return res.status(404).send({
                                message: "Product not found with id " + req.params.productId
                            });
                        }
                        console.log("------------ PRODUCT UPDATED ------------")
                        console.log(response)
                        res.status(204).end()
                    }).catch(err => {
                        return res.status(400).send(err);
                    });
            }
        }
    });
});


//---------------------------------------------------DELETE Product------------------------------------------------------//

app.delete('/user/:email/product/:productId', (req, res) => {
    User.findOne({ 'email': req.params.email }, (err, user) => {
        if (!user) {
            res.status(401).send({ Message: "Unauthorized" });
        } else {
            Product.findByIdAndRemove(req.params.productId)
                .then(response => {
                    if (!response) {
                        console.log("Product not found with id " + req.params.productId)
                        return res.status(404).send({
                            message: "Product not found with id " + req.params.productId
                        });
                    }
                    console.log("------------ PRODUCT DELETED ------------")
                    console.log(response)
                    res.status(204).end()
                }).catch(err => {
                    return res.status(400).send(err);
                });
        }
    });
})


//----------------------------------------------------GET Product-------------------------------------------------------//

app.get('/user/:email/product/:productId', (req, res) => {
    User.findOne({ 'email': req.params.email }, (err, user) => {
        if (!user) {
            res.status(401).send({ Message: "Unauthorized" });
        } else {
            Product.findById(req.params.productId)
                .then(response => {
                    if (!response) {
                        console.log("Product not found with id " + req.params.productId)
                        return res.status(404).send({
                            message: "Product not found with id " + req.params.productId
                        });
                    }
                    console.log("------------ GET PRODUCT ------------")
                    console.log(response)
                    res.status(200).json(response)
                }).catch(err => {
                    return res.status(400).send(err);
                });
        }
    });
})


//----------------------------------------------------GET All Products-------------------------------------------------------//

app.get('/user/:email/product', (req, res) => {
    User.findOne({ 'email': req.params.email }, (err, user) => {
        if (!user) {
            res.status(401).send({ Message: "Unauthorized" });
        } else {
            Product.find()
                .then(response => {
                    if (response != null) {
                        console.log("------------ GET ALL PRODUCTS ------------")
                        console.log(response)
                        res.status(200).json(response)
                    } else {
                        return res.status(400).json({ msg: 'User does not have any products!' });
                    }
                }).catch(err => {
                    return res.status(400).send(err);
                });
        }
    });
})


//---------------------------------------------------DELETE User------------------------------------------------------//

app.delete('/user/:email/:id', (req, res) => {
    User.findOne({ 'email': req.params.email }, (err, user) => {
        if (!user) {
            res.status(401).send({ Message: "Unauthorized" });
        } else {
            User.findByIdAndRemove(req.params.id)
                .then(response => {
                    if (!response) {
                        console.log("User not found with id " + req.params.id)
                        return res.status(404).send({
                            message: "User not found with id " + req.params.id
                        });
                    }
                    console.log("------------ USER DELETED ------------")
                    console.log(response)
                    res.status(204).end()
                }).catch(err => {
                    return res.status(400).send(err);
                });
        }
    });
})

const port = 5000
app.listen(port, () => {
    console.log("Running on port " + port);
});;

module.exports = app;
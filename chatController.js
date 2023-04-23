const methods = {};

methods.getAnswer = (req) => {
    console.log(req.body);
    return new Promise(async(resolve, reject) => {
        resolve("success");
    });
}

module.exports = methods;
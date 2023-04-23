const methods = {};
const {Configuration, OpenAIApi} = require("openai");

const configuration = new Configuration({
    apiKey: "",
});

const openai = new OpenAIApi(configuration);

methods.getAnswer = (req) => {    
    return new Promise(async(resolve, reject) => {
        try {
            openai.createCompletion({
                model: "text-davinci-001",
                prompt: req.body.question,
            }).then((data) => {
                resolve({status: data.response.status, message: data.data});
            });
        } catch(e) {
            reject(e);
        }
    });
}

module.exports = methods;
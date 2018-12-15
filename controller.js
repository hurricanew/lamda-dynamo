module.exports.run = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "lamda, I am coming"
        })
    };
}
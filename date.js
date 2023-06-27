module.exports.getDate = function () {
    let today = new Date();
    let options = {
        day: "numeric",
        weekday: "long",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);

}
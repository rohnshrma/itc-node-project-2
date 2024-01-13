GET_HOME = (req, res) => {
    res.render("index")
}

GET_ABOUT = (req, res) => {
    res.render("about")
}

GET_CONTACT = (req, res) => {
    res.render("contact")
}

module.exports = {
    GET_HOME,
    GET_ABOUT,
    GET_CONTACT
}
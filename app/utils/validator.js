// legacy version

module.exports = {
    user: (app, req, res) => {
        // legacy version
        req.assert('name', "Name required").notEmpty();
        req.assert("email", "Email required").notEmpty().isEmail();

        let errors = req.validationErrors();

        if (errors) {
            app.utils.error.send(errors, req, res);
            return false;
        } else {
            return true;
        }
    }
};
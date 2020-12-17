/* ==== External Modules  ==== */
const express = require("express");

/* ==== Internal Modules  ==== */

/* ==== Instanced Modules  ==== */
const app = express();

/* ==== Configuration  ==== */
const PORT = 3501;

/* ==== Middleware ==== */

/* ==== Routes/Controllers  ==== */

/* ==== Server Listener  ==== */
app.listen(PORT, function() {
    console.log(`MovieHub is live at http://localhost:${PORT}/`);
});
const express = require('express'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || '3045';



//<---------- production ----------->
// if (process.env.NODE_ENV === 'production') {
//     process.env.PWD = process.cwd();
//     app.use(express.static(process.env.PWD + '/client/build'));
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(process.env.PWD, 'client', 'build', 'index.html'));
//     })
// }
//<--------------------------------->

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

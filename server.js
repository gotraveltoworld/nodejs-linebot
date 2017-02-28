// const app = require('express')();
// const server = require('http').Server(app);
// const url = require('url');
// const fixieUrl = url.parse(process.env.FIXIE_URL);

// const requestUrl = url.parse('http://www.example.com');

// app.set('port', process.env.PORT || 8080);
// app.get('/', function (req, res) {
//     res.send('hello');
// });
// var LINEBot = require('line-messaging');
// var bot = LINEBot.create({
//     channelID: '1482947046',
//     channelSecret: 'df2786945e22c3b8963bdae324c53654',
//     channelToken: 'oXujCqRaebFfWD4MZEsu3pPdwoO3ASeZtchwx8lTS6CTFYrZyBHBm9jPKu74Spk81IVkAi6m395Ck0jE' +
//             'sJGeeZVCkl68rs2m+5EZER3RpRveCPb6pJsgIWRxl3u+ux/u3Q+JgExekKyrUFg1Xo8kjwdB04t89/1O' +
//             '/w1cDnyilFU='
// }, server);
// app.use(bot.webhook('/webhook'));
// bot.on(LINEBot.Events.MESSAGE, function (replyToken, message) {
//     console.log('replyToken', replyToken);
//     if (message.isMessageType('text')) {
//         if (message.getText() === 'day') {
//             var text = new LINEBot.TextMessageBuilder('I\'m a super man!');
//             var sticker = new LINEBot.StickerMessageBuilder(1, 109);
//             bot.replyMultiMessage(replyToken, [text, sticker]).then(function (data) {
//                 console.log('res1', data);
//             }).catch(function (error) {
//                 console.log('error1', error);
//             });
//             console.log('res1', message.getText());
//         } else {
//             var text1 = new LINEBot.TextMessageBuilder('Hi');
//             var sticker1 = new LINEBot.StickerMessageBuilder(1, 109);
//             bot.replyMultiMessage(replyToken, [text1, sticker1]).then(function (data) {
//                 console.log('res2', data);
//             }).catch(function (error) {
//                 console.log('error2', error);
//             });
//             console.log('res2', message.getText());
//         }
//     } else {
//         console.log('message.getText()', message.getText());
//     }
// });

// server.listen(app.set('port'));

var request = require('request');

var options = {
    proxy: process.env.QUOTAGUARDSTATIC_URL,
    url: 'https://api.github.com/repos/joyent/node',
    headers: {
        'User-Agent': 'node.js'
    }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    } else {
        console.log('test!');
    }
}

request(options, callback);
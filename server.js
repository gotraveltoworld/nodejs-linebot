const app = require('express')();
const server = require('http').Server(app);
const url = require('url');
const fixieUrl = url.parse(process.env.QUOTAGUARDSTATIC_URL);

const requestUrl = url.parse('https://linebot-nodejs.herokuapp.com/');

app.set('port', process.env.PORT || 8080);
app.get('/', function (req, res) {
    res.send('hello');
});
var LINEBot = require('line-messaging');
var bot = LINEBot.create({
    channelID: process.env.channelID,
    channelSecret: process.env.channelSecret,
    channelToken: process.env.channelToken
}, server);
app.use(bot.webhook('/webhook'));
bot.on(LINEBot.Events.MESSAGE, function (replyToken, message) {
    console.log('replyToken', replyToken);
    if (message.isMessageType('text')) {
        if (message.getText() === 'day') {
            var text = new LINEBot.TextMessageBuilder('I\'m a super man!');
            var sticker = new LINEBot.StickerMessageBuilder(1, 109);
            bot.replyMultiMessage(replyToken, [text, sticker]).then(function (data) {
                console.log('res1', data);
            }).catch(function (error) {
                console.log('error1', error);
            });
            console.log('res1', message.getText());
        } else {
            var text1 = new LINEBot.TextMessageBuilder('Hi');
            var sticker1 = new LINEBot.StickerMessageBuilder(1, 109);
            bot.replyMultiMessage(replyToken, [text1, sticker1]).then(function (data) {
                console.log('res2', data);
            }).catch(function (error) {
                console.log('error2', error);
            });
            console.log('res2', message.getText());
        }
    } else {
        console.log('message.getText()', message.getText());
    }
});

server.listen(app.set('port'));

// var http, options, proxy, url;

// http = require("http");

// url = require("url");

// proxy = url.parse(process.env.QUOTAGUARDSTATIC_URL);
// target  = url.parse("http://ip.jsontest.com/");

// options = {
//   hostname: proxy.hostname,
//   port: proxy.port || 80,
//   path: target.href,
//   headers: {
//     "Proxy-Authorization": "Basic " + (new Buffer(proxy.auth).toString("base64")),
//     "Host" : target.hostname
//   }
// };

// http.get(options, function(res) {
//   res.pipe(process.stdout);
//   return console.log("status code", res.statusCode);
// });

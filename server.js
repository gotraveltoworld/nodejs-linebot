var app = require('express')();
var server = require('http').Server(app);
var LINEBot = require('line-messaging');

app.set('port', process.env.PORT || 8080);
app.get('/', function(req, res) {
    res.send('hello');
});

var bot = LINEBot.create({
    channelID: '1482947046',
    channelSecret: 'df2786945e22c3b8963bdae324c53654',
    channelToken: 'oXujCqRaebFfWD4MZEsu3pPdwoO3ASeZtchwx8lTS6CTFYrZyBHBm9jPKu74Spk81IVkAi6m395Ck0jEsJGeeZVCkl68rs2m+5EZER3RpRveCPb6pJsgIWRxl3u+ux/u3Q+JgExekKyrUFg1Xo8kjwdB04t89/1O/w1cDnyilFU='
}, server);
app.use(bot.webhook('/webhook'));
bot.on(LINEBot.Events.MESSAGE, function(replyToken, message) {
    if (message.isMessageType('text')) {
        if (message.getText() == "紅棗今年還剩幾天") {
            var date = new Date();
            var year = date.getFullYear();
            var date2 = new Date(year, 11, 31, 23, 59, 59);
            var time = (date2 - date) / 1000;
            var day = Math.floor(time / (24 * 60 * 60));
            var hour = Math.floor(time % (24 * 60 * 60) / (60 * 60));
            var minute = Math.floor(time % (24 * 60 * 60) % (60 * 60) / 60);
            var second = Math.floor(time % (24 * 60 * 60) % (60 * 60) % 60);
            var str = "倒數 " + day + "天" + hour + "小時" + minute + "分" + second + "秒￼";
            var text = new LINEBot.TextMessageBuilder(str);
            var sticker = new LINEBot.StickerMessageBuilder(1,109);
            bot.replyMultiMessage(replyToken, [text, sticker]).then(function(data) {
            }).catch(function(error) {});
        } else {
            bot.replyMultiMessage(replyToken,
                [
                    new LINEBot.TextMessageBuilder('Hi'),
                    new LINEBot.StickerMessageBuilder(1,109)
                ]).then(function(data) {
            }).catch(function(error) {});
        }
    }
});

server.listen(app.set('port'));
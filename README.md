
## A quick tutorial

1. Create a new Twitter account and a new Twitter app. ([See how.](https://botwiki.org/tutorials/how-to-create-a-twitter-app/))
2. Update the `.env` file with your Twitter API key/secrets and change the `BOT_ENDPOINT` (it could just be random letters).
3. Update `server.js` with some cool Twitter bot code. (Make sure your bot follows [Twitter's rules](https://support.twitter.com/articles/18311-the-twitter-rules) and is overall [not a jerk](https://botwiki.org/articles/essays/).)
4. Set up a free service ([cron-job.org](https://cron-job.org/en/), [Uptime Robot](https://uptimerobot.com/), or [a similar one](https://www.google.com/search?q=free+web+cron)) to wake up your bot [every 25+ minutes](https://support.glitch.com/t/a-simple-twitter-bot-template/747/16) and tweet. Use `https://YOUR_PROJECT_NAME.glitch.me/BOT_ENDPOINT` as a URL to which to send the HTTP request.

The included example tweets out "hello world 👋". Check out [the Twit module documentation](https://github.com/ttezel/twit) for more examples of what your bot can do.

You can find more tutorials and open source Twitter bots on [Botwiki](https://botwiki.org). Be sure to [join Botmakers](https://botmakers.org/) and [submit your bot to Botwiki](https://botwiki.org/submit-your-bot) :-)


**Powered by [Glitch](https://glitch.com)**

\ ゜o゜)ノ

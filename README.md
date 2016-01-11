# lambda-tweet-perfume
tweet Perfume MV randomly on AWS Lambda

# Preparation

Create `.env` to specify Twitter key and Youtube Access Key

```.env
CONSUMER_KEY=xxxxxx
CONSUMER_SECRET=xxxx
ACCESS_TOKEN_KEY=xxxxx
ACCESS_TOKEN_SECRET=xxxx
GOOGLE_API_KEY=xxxx
```

Detail

+ [Tokens from dev.twitter.com](https://dev.twitter.com/oauth/overview/application-owner-access-tokens)
+ [YouTube Data API (v3) Get Auth Credentials](https://developers.google.com/youtube/registering_an_application)

# Local execute

```bash
$node localExec.js
```

## MUST

```
💡 S3を使って静的サイトを公開しましょう
```

### ルール

- htmlファイルを準備しましょう
- 下記の要件を満たす静的ページを作成しましょう
    - ページの左側に項目があり、クリックすると右側に内容が表示される
    - 左側の項目は最低3つ作成してください
- S3のドキュメントを参照して、作成した静的ページを公開しましょう

https://docs.aws.amazon.com/ja_jp/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html

```
💡 CloudFrontを設定しましょう
```

### CloudFront（AWSのCDNサービス）

世界中に張り巡らされた配信ネットワークを利用して、Webサイトにアクセスしようとするユーザーに効率的かつ高速にWebコンテンツを配信するしくみをCDNといい、AWSではこれをCloudFrontというサービス名で提供しています。

CloudFront　https://aws.amazon.com/jp/cloudfront/

```
💡 CloudFront作成時に、WAF（Web Application Firewall）が一緒に構築されてしまうことがあるので、作らない（できてしまったら削除する）
```

**※補足**

ざっくりAWS　https://aws-rough.cc/

AWS使用状況レポート：[https://console.aws.amazon.com/billing/home#/](http://console.aws.amazon.com/billing) （ご自身のAWSのアカウントでログインしてください

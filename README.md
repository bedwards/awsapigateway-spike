# How to localstack / AWS API Gateway

```
$ aws --endpoint-url=http://localhost:4566 logs describe-log-groups --log-group-name-prefix /aws/lambda
            "logGroupName": "/aws/lambda/myspike-dev-api",

$ aws --endpoint-url=http://localhost:4566 logs tail /aws/lambda/myspike-dev-api --follow
```

```
http POST http://localhost:4566/restapis/ivewn9r2vl/dev/_user_request_/account
```

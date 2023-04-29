---
title: "Api One Pager"
description: "Api One Pager"
---

> DeBox currently supports two networks, Ethereum and BNB Chain, and will support Polygon in the future
>
> Developers can edit email to: tech@debox.pro to apply for API-Key

###DAO/NFT/Club

- Get current group information

```bash
[GET] https://open.debox.pro/openapi/group/info
```

Query query parameters

```json
group_invite_url: the share URL of the group
```

Header parameters

```json
X-API-KEY: API key
```

200 returns success

```json
# is_charge Check if it is PayEClub
# subchannel_number The number of subchannels
# group_name group name
# group_number group number
# group_pic group cover picture
# create_time creation time
# maximum Maximum number of groups
# mod MOD name
{
     "code": 200,
     "data": {
         "is_charge": true,
         "subchannel_number": 3,
         "group_name": "aaa",
         "group_number": 29,
         "group_pic": "https://data.debox.pro/static/2022/09/19/static/2022/09/19/100009_1435000131.jpg",
         "create_time": "2022-04-30 16:03:24",
         "maximum": "500",
         "mod": [
             "MOD1",
             "MOD2"
         ]
     },
     "message": "success",
     "success": true
}

```

400 error

```json
{"error":"Bad Request","code":400,"message":"You X-API-KEY is not available"}
```

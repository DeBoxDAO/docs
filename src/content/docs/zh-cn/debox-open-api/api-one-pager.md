---
title: "Api One Pager"
description: "Api One Pager"
---

> DeBox目前支持 Etherum 和 BNB Chain 两个网络，后续支持 Polygon
>
> 开发者可以编辑电子邮件至：tech@debox.pro 申请 API-Key

### DAO/NFT/Club

- 获得当前群组信息

```bash
[GET] https://open.debox.pro/openapi/group/info
```

Query查询参数

```json
group_invite_url: 群组的分享URL
```

Header参数

```json
X-API-KEY: API key
```

200返回成功

```json
# is_charge 检查是否为PayEClub
# subchannel_number 子频道数量
# group_name 群组名称
# group_number 群组人数
# group_pic 群封面图
# create_time 创建时间
# maximum 最大群组人数上限
# mod MOD名称
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

400报错

```json
{"error":"Bad Request","code":400,"message":"You X-API-KEY is not available"}
```

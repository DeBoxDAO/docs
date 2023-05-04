---
title: "Golang DeBox开放SDK"
description: "Golang DeBox开放SDK"
---

> 开放平台提供 Go 语言版本 SDK（Software Development Kit）
>
> 此 SDK 由 DeBox 官方开发维护
>
> Go SDK 封装了 DeBox 服务的所有 API 接口，您可以通过 Go SDK 方便地调用相关服务的所有 API 接口。

### 安装 SDK

```bash
# 安装过程中，界面不会打印提示，请耐心等待。如果安装超时，请再次执行以上命令
# 如果命令执行完成并且无任何报错，表示SDK安装成功
go get -u github.com/debox-pro/debox-chat-go-sdk
```

### 快速入门

> 已安装日志服务 Go SDK
>
> 已安装 Proto 依赖包。安装命令：go get -u github.com/gogo/protobuf/proto

示例代码

- 注册回调地址

```go
// 本示例中，创建一个SLSQuickStart.go文件
// 调用接口分别完成创建Project、创建Logstore、创建索引、写入日志数据和查询日志数据

package main

import (
    "fmt"
    dbx_chat "github.com/debox-pro/debox-chat-go-sdk"
)

func main() {
    registerUrl := "www.xxx.pro/get_message"
    client := dbx_chat.CreateNormalInterface("https://open.debox.pro", "xxxxx")
    _, err := client.RegisterCallbakUrl(registerUrl, "POST", "register")
    if err != nil {
        fmt.Println("register callback url  fail:", err)
        return
    }
    fmt.Println("register callback url success.")
}
```

- 发送对话消息

```go
package main

import (
    "fmt"
    dbx_chat "github.com/debox-pro/debox-chat-go-sdk"
)

func main() {

    xApiKey := ""
    client := dbx_chat.CreateNormalInterface("https://open.debox.pro", xApiKey)

    toUserId := ""
    groupId := ""
    message := ""
    _, err := client.SendChatMsg(toUserId, groupId, message, "send_msg")

    if err != nil {
        fmt.Println("send chat message fail:", err)
        return
    }

    fmt.Println("send chat message success.")

}
```

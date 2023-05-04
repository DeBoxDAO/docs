---
title: "Golang DeBox Open SDK"
description: "Golang DeBox Open SDK"
---

> Open platform provides Go language version SDK (Software Development Kit)
>
> This Golang SDK develop by DeBox official team
>
> Go SDK encapsulates all API interfaces of DeBox services, and you can easily call all API interfaces of related services through Go SDK.

### Install the SDK

```bash
# During the installation process, the interface will not print prompts, please wait patiently. If the installation times out, execute the above command again
# If the command is executed without any error, it means that the SDK installation is successful
go get -u github.com/debox-pro/debox-chat-go-sdk
```

### Quick Start

> Logging Service Go SDK installed
>
> Proto dependencies installed. Installation command: go get -u github.com/gogo/protobuf/proto

sample code

- Register callback address

```go
// In this example, create a SLSQuickStart.go file
// Call the interface to complete creating Project, creating Logstore, creating index, writing log data and querying log data respectively

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
         fmt.Println("register callback url fail:", err)
         return
     }
     fmt.Println("register callback url success.")
}
```

- send conversation message

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
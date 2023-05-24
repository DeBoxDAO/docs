---
title: "Rust DeBox开放SDK"
description: "Rust DeBox开放SDK"
---

> 开放平台提供 Rust 语言版本 SDK（Software Development Kit）
>
> Github: https://github.com/DeBoxLove/debox-open-rust
>
> Docs.rs: https://docs.rs/debox-open-sdk

### 基础介绍

本项目是Debox社交聊天服务（Chat Service）API的编程接口，Chat Service Rest API的封装和实现，帮助开发者更快的编程和使用Debox的聊天消息服务。

详细的API接口及含义请参考：https://docs.debox.love

### 使用教程

```rust
use debox_open_sdk::{RegisterCallbackUrlBody, Client, ClientOptions, SendChatMsgBody};

#[tokio::main]
async fn main() {
    let opt = ClientOptions {
        endpoint: "https://open.debox.pro".to_string(),
        api_key: "api_key".to_string(),
        user_agent: None,
        request_time_out: None,
        auth_version: None,
    };
    let client = Client::new(&opt);
    let body = RegisterCallbackUrlBody {
        url: "http://xxx.com".to_string(),
        http_method: "POST".to_string(),
    };
    let res = client.register_callbak_url(&body).await;
    match res {
        Ok(res) => {
            println!("register_callbak_url res: {:?}", res);
        }
        Err(e) => {
            println!("register_callbak_url err: {:?}", e);
        }
    }
    let body = SendChatMsgBody {
        group_id: "group_id".to_string(),
        to_user_id: "DeBox.Love".to_string(),
        message: "Hello World".to_string(),
    };
    let res = client.send_chat_msg(&body).await;
    match res {
        Ok(res) => {
            println!("send_chat_msg res: {:?}", res);
        }
        Err(e) => {
            println!("send_chat_msg err: {:?}", e);
        }
    }
}

```

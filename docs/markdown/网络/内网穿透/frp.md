# frp

官方文档地址：[https://gofrp.org/docs](https://gofrp.org/docs)

## ssh 连接

分服务端（云服务器等有公共 IP 的）与客户端（本地内网机器）

```shell
[common]
bind_port = 7000  # 这个是服务端提供给客户端建立连接的端口
```

```shell
[common]
server_addr = x.x.x.x # 服务端地址
server_port = 7000 # 服务端建立连接的端口

[ssh]
type = tcp
local_ip = 127.0.0.1  # 本地域名
local_port = 22	# 本地端口
remote_port = 6000 # 服务端的转发端口，比如访问服务端的6000端口就会转发到客户端的22端口
```

## web 连接

### 方式一：

参考 ssh 连接，添加配置 frpc.ini

```shell
[web]
type = tcp
local_ip = 127.0.0.1
local_port = 80 # 本地端口
remote_port = 80 # 服务端的转发端口
```

### 方式二：

分服务端（云服务器等有公共 IP 的）与客户端（本地内网机器）

```shell
[common]
bind_port = 7000  # 这个是服务端提供给客户端建立连接的端口

# 在原本服务端的frps.ini配置基础上增加
vhost_http_port = 7600
vhost_https_port = 7601
```

vhost_http_port = 7600 和 vhost_https_port = 7601 表示将服务器的 7600 端口做为 http 服务的访问入口，7601 端口做为 https 服务的访问入口<br/>
1）服务器端开放 7600 端口、如果配置了 https 服务则开放 7601 端口<br/>
2）运行程序<br/>
3）通过域名/ip+端口访问内网的 http/https 服务

```shell
[common]
server_addr = x.x.x.x # 服务端地址
server_port = 7000 # 服务端建立连接的端口

[ssh]
略（同上）

#  在原本客户端的frpc.ini 配置基础上增加
[http]
type = http
local_ip = 127.0.0.1
local_port = 8800
custom_domains = xxx
```

此处与 SSH 服务配置相似，只是将 type 更改为 http 并多设置一个 custom_domains<br />custom_domains = 这里填写你已经解析到 frps 服务端 IP 上的域名，自己每个穿透对应服务，都可以绑定一个专属域名用于访问，包括使用 tcp 和 udp 协议，然后就可以通过这个已经自定义域域名访问到自己的对应 HTTP 服务<br />如果没有域名则先写外网 ip 即可<br />注意这里没有设置 remote_port，http 服务和 http 服务的访问端口在服务器端设置

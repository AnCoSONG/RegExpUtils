# 学习笔记

* 使用url源进行一次安装

```shell
yarn add something --registry url 
```

* npm login 无法登录

删除`user`目录下`.npmrc`

* travis ci自动化部署npm

对`.travis.yml`增加如下字段
```yml
deploy:
  provider: npm
  email: 1197252996@qq.com
  api_token: $NPM_TOKEN
  on:
    branch: master
  cleanup: true
```
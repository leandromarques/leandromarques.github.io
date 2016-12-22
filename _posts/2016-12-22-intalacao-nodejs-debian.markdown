---
layout: post
title:  "Instalação do NodeJs mais atual no Ubuntu via NVM"
date:   2016-12-17 18:00:00 -0200
categories: infraestrutura
---
Dificilmente sua instalação do Ubuntu (ou outra distribuição Debian) vem com o NodeJs e NPM em sua versão mais recente. Uma forma fácil, rápida e inteligente de instalar ou atualizar o NodeJs em seu computador é utilizando o NVM.

O NVM é um gerenciador de versões do NodeJs (assim como o RVM está para o Ruby), que permite que você tenha várias versões instaladas em sua máquina, podendo alternar entre elas dependendo de sua necessidade.

Para instalar, é muito fácil.

Vá ao terminal e baixe as dependências

```
$ sudo apt-get install build-essential libssl-dev
```

Logo em seguida, baixe o NVM (mude o número da versão, caso seja necessário), já exportando as variáveis necessárias para rodar bonito no bash:

 ```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
 ```

 Aplique as alterações do bash para conseguir utilizar o comando nvm:

```
$ . ~/.bashrc
```

Liste as versões disponíveis para baixar:

```
$ nvm ls-remote | grep -i lts
         v4.2.0   (LTS: Argon)
         v4.2.1   (LTS: Argon)
         v4.2.2   (LTS: Argon)
         v4.2.3   (LTS: Argon)
         v4.2.4   (LTS: Argon)
         v4.2.5   (LTS: Argon)
         v4.2.6   (LTS: Argon)
         v4.3.0   (LTS: Argon)
         v4.3.1   (LTS: Argon)
         v4.3.2   (LTS: Argon)
         v4.4.0   (LTS: Argon)
         v4.4.1   (LTS: Argon)
         v4.4.2   (LTS: Argon)
         v4.4.3   (LTS: Argon)
         v4.4.4   (LTS: Argon)
         v4.4.5   (LTS: Argon)
         v4.4.6   (LTS: Argon)
         v4.4.7   (LTS: Argon)
         v4.5.0   (LTS: Argon)
         v4.6.0   (LTS: Argon)
         v4.6.1   (LTS: Argon)
         v4.6.2   (LTS: Argon)
         v4.7.0   (Latest LTS: Argon)
         v6.9.0   (LTS: Boron)
         v6.9.1   (LTS: Boron)
         v6.9.2   (Latest LTS: Boron)
```

Escolha a versão desejada:

```
$ nvm install 6.9.2
######################################################################## 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v6.9.2 (npm v3.10.9)
Creating default alias: default -> 6.9.2 (-> v6.9.2)
```

Confira se tudo está instalado/atualizado checando as versões:

```
$ node --version
v6.9.2
$ npm --version
3.10.9
```


Pronto, Node instalado/atualizado! :)

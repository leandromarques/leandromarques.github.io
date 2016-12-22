---
layout: post
title:  "Instalação/Atualização do NodeJs no Ubuntu e Debian via NVM"
date:   2016-12-17 18:00:00 -0200
categories: infraestrutura
---
Sempre que mudo de computador ou preciso formatá-lo por algum motivo, acabo precisando atualizar o NodeJs no Ubuntu (ou qualquer outra distribuição baseada no Debian que eu venha a utilizar). A minha primeira ação é ir no Google e pesquisar pela solução (o que muito de vocês que chegaram aqui deve ter feito) e ir pulando de página em página até achar um modo que funcione sem maiores problemas. Sempre acabo me enrolando nas diferentes opções existentes.

Dessa vez acabei fazendo o processo via NVM (gerenciador de versões do Node), que foi muito mais simples e rápido que incluir PPA's ou baixar os binários e fazer tudo na mão. Sem contar o ganho de se usar um gerenciado de versões, que me dá muita flexibilidade caso seja necessário usar diferentes versões do Node.

Então, vamos instalar o Node!

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

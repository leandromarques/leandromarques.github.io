---
layout: post
title:  "Instalação do NodeJs via NVM"
date:   2016-12-17 18:00:00 -0200
categories: infraestrutura
---
Dificilmente sua instalação do Ubuntu (ou outra distribuição Debian) vem com o NodeJs e NPM em sua versão mais recente. Uma forma fácil, rápida e inteligente de instalar ou atualizar o NodeJs em seu computador é utilizando o NVM.

O NVM é um gerenciador de versões do NodeJs (assim como o RVM está para o Ruby), que permite que você tenha várias versões instaladas em sua máquina, podendo alternar entre elas dependendo de sua necessidade.

Para instalar, é muito fácil.

Vá ao terminal e baixe as dependências

{% highlight bash %}
$ sudo apt-get install build-essential libssl-dev
{% endhighlight %}

Logo em seguida, baixe o NVM (mude o número da versão, caso seja necessário), já exportando as variáveis necessárias para rodar bonito no bash:

{% highlight bash %}
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
{% endhighlight %}

 Aplique as alterações do bash para conseguir utilizar o comando NVM:

 {% highlight bash %}
 $ source ~/.bashrc
 {% endhighlight %}

O comando abaixo irá listar as versões disponíveis para baixar:

{% highlight bash %}
$ nvm ls-remote | grep -i lts
{% endhighlight %}

Escolha a versão desejada:

{% highlight bash %}
$ nvm install v8.11.1
{% endhighlight %}


Confira se tudo está instalado/atualizado checando as versões:

{% highlight bash %}
$ node --version
v8.11.1
{% endhighlight %}

{% highlight bash %}
$ npm --version
6.0.0
{% endhighlight %}


Pronto, Node instalado/atualizado! :)

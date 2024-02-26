---
pubDate: "February 21, 2024"
title: Docker basic guide
category: Docker
description: Guia basico de uso do docker
heroImage: https://blog.schoolofnet.com/wp-content/uploads/2018/03/info-docker.png
---

O post de hoje é sobre a ferramenta do docker

# O que é o docker
O Docker é um software de código aberto usado para implantar aplicativos dentro de containers virtuais. A conteinerização permite que vários aplicativos funcionem em diferentes ambientes complexos. Por exemplo: o Docker permite executar o WordPress em sistemas Windows, Linux e macOS, sem problemas.

# Como o Docker Funciona
Docker é como uma caixa mágica que empacota todos os pedaços necessários para fazer um programa funcionar. Você pode levar essa caixa para qualquer lugar e ela garantirá que seu programa funcione da mesma forma em qualquer computador. É como uma caixa de brinquedos onde você pode guardar todos os brinquedos juntos e levá-los para onde quiser, sem precisar se preocupar em perdê-los.

![Imagem do docker ](https://miro.medium.com/v2/resize:fit:720/format:webp/0*ZvHUVaVlXV7-Nygn.png)

O Docker roda diretamente com o os que voce usa, prioritariamente ele roda no linux e para rodar no windows ele usa o wsl para ter uma simulação do linux e rodar dentro do linux

## Diferença do Docker para Virtual Machine
Docker é uma plataforma voltada para a criação e execução de containers. Diferente de uma VM, um container empacota somente o código, dependências e variáveis de ambiente necessárias para a execução de uma aplicação. Sendo assim, ao invés de termos uma infraestrutura onde cada VM tem seu próprio SO sendo responsável por uma aplicação diferente, temos uma infraestrutura onde, com apenas um sistema operacional e através do Docker, podemos gerenciar diversas aplicações. Cada uma dessas aplicações é executada de forma isolada, sem a necessidade de um sistema operacional próprio.

# Arquivos Docker

```bash
    docker-compose.yml
    Dockerfile
```

o `DockerFile` é um arquivo responsavel por criar uma imagem personalizada do docker, exemplo de um dockerfile para projeto node

```DockerFile
# Use uma imagem base do Node.js
FROM node:alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências do npm
RUN npm install

# Copie o restante dos arquivos do aplicativo
COPY . .

# Exponha a porta em que o aplicativo está em execução (se necessário)
# EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["node", "app.js"]
```

e agora o `docker-compose.yml` que é uma ferramenta que permite definir e gerenciar aplicativos Docker multiservicos dentro de um container em um único arquivo de configuração. Com o Docker Compose, você pode definir as configurações para vários serviços, incluindo a imagem, portas expostas, variáveis de ambiente, volumes, redes, entre outros, tudo em um arquivo YAML simples. Exemplo de docker-compose com postgres, rabbitmq e redis

```Docker

version: '3'

services:
    redis:
        image: redis:latest
        ports:
        - "6379:6379"
        volumes:
        - redis_data:/data

    postgres:
        image: postgres:latest
        environment:
        POSTGRES_USER: myuser
        POSTGRES_PASSWORD: mypassword
        POSTGRES_DB: mydatabase
        ports:
        - "5432:5432"
        volumes:
        - postgres_data:/var/lib/postgresql/data

    rabbitmq:
        image: rabbitmq:latest
        ports:
        - "5672:5672"
        - "15672:15672"
        environment:
        RABBITMQ_DEFAULT_USER: guest
        RABBITMQ_DEFAULT_PASS: guest

    volumes:
    redis_data:
    postgres_data:
```

# Principais comandos
### Comandos básicos:

para listar todos os containers em execução
``` shell
docker ps
```
para listar todos os containers mesmo os que nao estao em execução
``` shell
docker ps -a
```

Parar um container que esta rodando
``` shell
docker stop id_do_container
```

para acessar o terminal ou executar outros comandos sobre o container
```shell
docker exec ID_do_contêiner comando
```
- comando para acessar o terminal do container: `bash`

Para logs
``` shell
docker logs ID_do_contêiner
```

### Para dockerfile: 

para fazer o build do dockerfile utiliza-se esse comando
``` shell
docker image build -t nome_do_container .
```

para rodar a imagem
``` shell
docker run nome_da_imagem
```

para rodar a imagem e expor a porta na sua maquina
``` shell
docker run -p 8080:80 nome_da_imagem 
```
a porta que vem primeiro é a do seu computador e a segunda a do container


para rodar a imagem na porta escolhida e em 2 plano
``` shell
docker run -D -p 8080:80 nome_da_imagem 
```

### para docker-composer

para rodar o composer com logs
```shell
docker-compose up
```

para rodar o composer em 2 plano 
```shell
docker-compose up -d
```

para parar o composer 
```shell
docker-compose down
```

para executar comandos dentro de algum servico do composer
``` bash
docker-compose exec nome_do_serviço comando
```

para reconstruir os serviços (resetar do zero)
``` shell
docker-compose build
```

para reiniciar o composer
``` shell
docker-compose restart
```

# Comandos do Dockerfile

- `FROM`: Define a imagem base para a construção da sua imagem.
- `ARG`: Define argumentos que podem ser passados ​​durante a construção da imagem.
- `LABEL`: Adiciona metadados à imagem.
- `RUN`: Executa comandos durante a construção da imagem.
- `COPY`: Copia arquivos ou diretórios do host para o sistema de arquivos do contêiner.
- `ADD`: Similar ao COPY, mas pode fazer download de arquivos remotos e extrair arquivos comprimidos.
- `WORKDIR`: Define o diretório de trabalho para os comandos RUN, - CMD, ENTRYPOINT, COPY e ADD.
- `ENV`: Define variáveis de ambiente dentro do contêiner.
- `USER`: Define o usuário ou UID usado ao executar os comandos RUN, CMD e ENTRYPOINT.
- `VOLUME`: Cria um ponto de montagem para armazenar dados persistentes.
- `EXPOSE`: Informa ao Docker que o contêiner escuta em portas específicas durante o tempo de execução.
- `CMD`: Fornece um comando padrão a ser executado quando o contêiner é iniciado.
- `ENTRYPOINT`: Configura um comando para executar quando o contêiner é iniciado.
- `HEALTHCHECK`: Define um comando para verificar a saúde do contêiner.
- `ONBUILD`: Adiciona instruções que são executadas quando a imagem atual é usada como base para outra imagem.
- `STOPSIGNAL`: Define o sinal que será enviado ao contêiner para indicar a parada.
- `SHELL`: Define o shell padrão a ser usado para os comandos RUN.

# Comandos do docker-compose

o docker compose usa a linguagem `yaml` então basta digitar em yaml


# Docker network




## Links uteis
- [https://dev.to/clintonrocha98/primeiros-passos-no-docker-m0k]
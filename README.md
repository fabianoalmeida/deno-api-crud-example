## Deno API CRUD
### :metal: Deno [Installation](https://deno.land):
#### Using Shell (macOS, Linux):
```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```
#### Using PowerShell (Windows):
```sh
iwr https://deno.land/x/install/install.ps1 -useb | iex
```
#### Using Cargo (Windows, macOS, Linux):
```sh
cargo install deno
```
#### Using Homebrew (macOS):
```sh
brew install deno
```
#### Using Chocolatey (Windows):
```sh
choco install deno
```
#### Using Scoop (Windows):
```sh
scoop install deno
```
### :rocket: Locally:
#### Run:
```sh
deno run --allow-net --allow-env --unstable index.ts
```
### :zap: [Docker](https://www.docker.com/products/docker-desktop):
#### Mongo:
- Download
```sh
docker pull mongo
```
- Run
```sh
docker run -d --name mongodb -p 27027:27027 mongo
```
#### Build:
```sh
docker build -t deno-app .
```
#### Run application:
```sh
docker run -p 4000:4000 --rm deno-app
```
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
deno run --allow-net --allow-env index.ts
```
### :zap: Docker:
#### Build:
```sh
docker build -t deno-app .
```
#### Run:
```sh
docker run -p 4000:4000 --rm deno-app
```
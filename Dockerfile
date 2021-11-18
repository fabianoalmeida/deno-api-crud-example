# More info - https://github.com/denoland/deno_docker
FROM denoland/deno:1.15.3

# The port that your application listens to.
EXPOSE 1993

WORKDIR /app

# Prefer not run as root.
USER deno

# These steps will be re-run upon each file change in your working directory:
ADD . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache index.ts

# These are passed as deno arguments when run with docker:
CMD ["run","--allow-env","--allow-net", "index.ts"]
# Command CORS Webapp example

## Running the example

First, replace `command.my-company.com` with your command URL in `./no-proxy/script.js` and in `./with-proxy-nginx.conf`.

```bash
# build containerimages
docker compose build

# run containerimages 
docker compose up -d
```

* webapp WITHOUT proxy should be accessible on `http://localhost:3000` then
* webapp WITH proxy should be accessible on `http://localhost:4000` then


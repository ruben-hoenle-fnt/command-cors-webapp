# Command CORS Webapp example

## Running the example

First, replace `command.my-company.com` with your command URL in [no-proxy/script.js](https://github.com/ruben-hoenle-fnt/command-cors-webapp/blob/7fd94f2d7b6711dfa4fc9a840e329ec5e20262d6/no-proxy/script.js#L17) and in [with-proxy-nginx.conf](https://github.com/ruben-hoenle-fnt/command-cors-webapp/blob/7fd94f2d7b6711dfa4fc9a840e329ec5e20262d6/with-proxy/nginx.conf#L22).

```bash
# build containerimages
docker compose build

# run containerimages 
docker compose up -d
```

* webapp WITHOUT proxy should be accessible on `http://localhost:3000` then
* webapp WITH proxy should be accessible on `http://localhost:4000` then

## Explanation

If you login into the webapp (the one without proxy) on `http://localhost:3000` you should see a CORS error in the browser console. 
That's because the webapp directly calls the command instance API (see [noproxy/script.js](https://github.com/ruben-hoenle-fnt/command-cors-webapp/blob/7fd94f2d7b6711dfa4fc9a840e329ec5e20262d6/no-proxy/script.js#L17)).

If you login into the webapp (the one with proxy) on `http://localhost:4000` you should be able to login successfully. You should see your sessionId in the UI.
That's because the webapp DOESN'T directly call the command instance.
Instead the webserver (in the example nginx) was configured to pass all requests to `/axis` to your command instance API (see [with-proxy/nginx.conf](https://github.com/ruben-hoenle-fnt/command-cors-webapp/blob/7fd94f2d7b6711dfa4fc9a840e329ec5e20262d6/with-proxy/nginx.conf#L21-L23)).
In our webapp we then only call the `/axis` path on the webserver of the webapp itself (see [with-proxy/script.js](https://github.com/ruben-hoenle-fnt/command-cors-webapp/blob/7fd94f2d7b6711dfa4fc9a840e329ec5e20262d6/with-proxy/script.js#L17)). 
The webserver proxy will then redirect our call to the command API.


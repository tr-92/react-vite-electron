# Update Server

This is a simple update server that will serve the latest version of the app to the client.

Place the latest release binaries and the update manifest "latest.yml" in the "updates" directory.

## Usage

Run the server with `npm run server`.

The server will serve the latest version of the app to the client at `http://localhost:3000/updates/`.

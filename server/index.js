import express from "express";

import { join, dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the 'updates' directory
app.use("/updates", express.static(join(__dirname, "updates")));

app.listen(PORT, () => {
  console.log(`Update server running at http://localhost:${PORT}/updates/`);
});

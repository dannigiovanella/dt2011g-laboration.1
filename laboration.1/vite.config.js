import { defineConfig } from "vite";
import { resolve } from "path";


export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                pictures: resolve(__dirname, "pictures.html"),
                process: resolve(__dirname, "process.html"),
            }
        }
    }
}
);
import { envs } from "./config/envs"
import { Server } from "./presentation/server"

const main = () => {
    const servidor  = new Server({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
    servidor.start()
}

(() => {
    main()
})()

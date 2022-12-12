import { NuxtAuthHandler } from "#auth";
import GithubProvider from "next-auth/providers/github";
const config = useRuntimeConfig();
export default NuxtAuthHandler({
    providers: [
        // @ts-ignore
        GithubProvider.default({
            clientId: config.GITHUB_CLIENT_ID,
            clientSecret: config.GITHUB_CLIENT_SECRET
        })
    ]
})
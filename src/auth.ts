import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET , GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} from "$env/static/private"

export const { handle } = SvelteKitAuth({
  providers: [
    GitHub({ clientId: GITHUB_CLIENT_ID, clientSecret: GITHUB_CLIENT_SECRET }),
    Google({clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET}),
  ]
});
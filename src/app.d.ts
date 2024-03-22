// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { User } from './types/User';

declare global {
  namespace App {
    interface Locals {
      user: User | undefined;
    }

    interface Platform {
      env: {
        COUNTER: DurableObjectNamespace;
        DISCORD_API_URL: string;
        DISCORD_CLIENT: string;
        DISCORD_SECRET: string;
        HOST: string;
        DB: D1Database;
      };
      caches: CacheStorage_3
      cf: CfProperties;
      ctx: ExecutionContext;
    }
  }
}

export { };

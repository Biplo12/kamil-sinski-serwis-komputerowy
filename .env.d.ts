declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SHOW_LOGGER: string;
      EMAIL_ADDRESS: string;
      SENDER_EMAIL_ADDRESS: string;
      EMAIL_PASSWORD: string;
      DATABASE_URL: string;
      DB_NAME: string;
      FACEBOOK_APP_ID: string;
      FACEBOOK_APP_SECRET: string;
    }
  }
}

export {};

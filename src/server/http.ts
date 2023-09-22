class Http {
  #URL: string = "https://tom-rpg-db-default-rtdb.firebaseio.com";

  async fetch<T>(config?: FetchConfig): Promise<T | string> {
    try {
      return (
        await fetch(`${this.#URL}/${config?.param}.json`, {
          headers: config?.body
            ? {
                "Content-Type": "application/json",
              }
            : undefined,
          ...config,
        })
      ).json() as T;
    } catch (e) {
      if (e instanceof Error) {
        return e.message;
      }
      throw new Error("unexpected error is occur");
    }
  }
}

interface FetchConfig {
  method?: "POST" | "PUT" | "GET" | "DELETE";
  param?: string;
  headers?: undefined;
  body?: string;
}

export const http = new Http();

class Http {
  #URL: string = "https://tom-rpg-db-default-rtdb.firebaseio.com/data.json";

  async fetch<T>(config?: FetchConfig): Promise<T | string> {
    try {
      return (
        await fetch(this.#URL, {
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
  headers?: undefined;
  body?: string;
}

export const http = new Http();

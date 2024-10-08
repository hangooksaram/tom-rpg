class Http {
  #URL: string = 'https://tom-rpg-db-default-rtdb.firebaseio.com';

  async fetch<T>(config?: FetchConfig): Promise<T> {
    try {
      return (
        await fetch(`${this.#URL}/${config?.param}`, {
          headers: config?.body
            ? {
                'Content-Type': 'application/json',
              }
            : config?.headers!,
          ...config,
        })
      ).json() as T;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
      throw new Error('unexpected error is occur');
    }
  }
}

interface FetchConfig {
  method?: 'POST' | 'PUT' | 'GET' | 'DELETE';
  param?: string;
  headers?: HeadersInit;
  body?: string;
}

export const http = new Http();

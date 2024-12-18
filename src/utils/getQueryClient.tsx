import { QueryClient } from "@tanstack/react-query";

let client: QueryClient;

export default function getQueryClient() {
  if (!client) {
    client = new QueryClient();
  }
  return client;
}

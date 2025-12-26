import { DocumentManager } from "@y-sweet/sdk";

const connectionString = process.env.Y_SWEET_CONNECTION_STRING;

if (!connectionString) {
  throw new Error("Y_SWEET_CONNECTION_STRING is not defined");
}

export const ySweetManager = new DocumentManager(connectionString);

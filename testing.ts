import { BufReader, BufWriter } from "https://deno.land/std/io/bufio.ts";
import {
  BodyReader,
  IncomingResponse,
  ServerRequest,
  HttpBody,
} from "./server.ts";

import { readResponse, setupBody } from "./serveio.ts";
import { createResponder } from "./responder.ts";
import { closableBodyParser } from "./_reader.ts";
import { parseCookie } from "./cookie.ts";

import {
  bodyReader,
  chunkedBodyReader,
  emptyReader,
} from "https://deno.land/std/http/_io.ts";

import { createBodyParser, BodyParser } from "./bodyParser.ts";
import { createDataHolder } from "./dataHolder.ts";
import { assert } from "https://deno.land/std/testing/assert.ts";

export interface RespondeRecorder extends ServerRequest {
  /** Obtain recorded response */
  response(): Promise<IncomingResponse & BodyParser>;
}

/** Create dummy request & responder that records a response from HTTPHandler */
export function createRecorder(opts?: {
  url?: string;
  method?: string;
  proto?: string;
  headers?: string;
  body?: string;
}): ResponseRecorder {
  const url = opts?.url ?? "/";
  const method = opts?.method ?? "GET";
  const headers = opts?.headers ?? new Headers();
}

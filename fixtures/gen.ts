import { writeRequest, writeResponse, writeTrailers } from "../serveio.ts";
import { encode } from "https://deno.land/std/string/encode.ts";
import { StringReader } from "https://deno.land/std/io/readers.ts";

async function main() {
  await basicRequestGet();
  await basicRequestPost();
  await chunkedRequestPost();
  await chunkedRequestPostWithTrailers();
  await basicResponse();
  await chunkedResponse();
}

main();

async function basicRequestGet() {
  const f = await Deno.open("./fixtures/request_get.txt", "w");
  await writeRequest(f, {
    url: "https://deno.land/index.html?deno=land&msg=gogo",
    method: "GET",
    headers: new Headers({ "Content-Type": "text/plain" }),
  });
  f.close();
}

async function basicRequestPost() {
}

async function chunkedRequestPost() {
}

async function chunkedRequestPostWithTrailers() {
}

async function basicResponse() {
}

async function chunkedResponse() {
}

FROM debian:stretch
ARG DENO_VERSION
RUN apt update -y && apt install curl wrk -y
ENV DENO_DIR=/deno
ENV DENO_INSTALL=/deno/.deno
ENV PATH=${DENO_INSTALL}/bin:${PATH}
RUN curl -fsSL https://deno.land/x/install/install.sh | sh -s -- ${DENO_VERSION}
COPY . /servest-deno
RUN deno fetch /servest-deno/benchmark/listenBench.ts \
    && deno fetch /servest-deno/benchmark/stdBench.ts \
    && deno fetch /servest-deno/benchmark/main.ts
ENV TARGET=/servest-deno/benchmark/listenBench.ts
CMD ["deno", "-A", "/servest-deno/benchmark/main.ts"]
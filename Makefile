DENO_VERSION=`cat .denov`
default: test
.PHONY: types
types:
	deno run -A tools/genTypes.ts
	deno fmt types/**/*.ts
test:
	deno test -A *Test.ts
build:
	docker build --build-arg DENO_VERSION=${DENO_VERSION} -t servest-deno/site .
bench:
	docker build --build-arg DENO_VERSION=${DENO_VERSION} -t servest-deno/bench -f benchmark/Dockerfile .
do-bench: bench
	docker run -t servest-deno/bench
do-std-bench: bench
	docker run -e TARGET=/servest-deno/benchmark/stdBench.ts -t servest-deno/bench
dev:
	./tools/dev.ts site/ "site/index.ts"
.PHONY: mod.ts
mod.ts:
	deno run --allow-read --allow-write ./tools/makeProd.ts

# nestjs-cachemanagerbug
jest hangs when using cache-manager with redis

Run a local redis instance:
```
docker run --name some-redis -d redis
```
Run the test
```
git clone https://github.com/greenreign/nestjs-cachemanagerbug.git
cd nestjs-cachemanagerbug
yarn
yarn test
```

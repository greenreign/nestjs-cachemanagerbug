import { CacheModule, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import redisStore from 'cache-manager-ioredis';
describe('test', () => {
    let nestApp: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [
                CacheModule.register({
                    host: 'loalhost',
                    port: 6379,
                    store: redisStore,
                }),
            ],
        }).compile();
        nestApp = moduleFixture.createNestApplication();
        await nestApp.init();
    });

    afterEach(async () => {
        return nestApp.close();
    });

    it('success', () => {
        expect(true);
    });
});

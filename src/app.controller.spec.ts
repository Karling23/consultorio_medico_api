import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppController', () => {
  let appController: AppController;
  let mockAppService: { getHello: jest.Mock };

  beforeEach(async () => {
    mockAppService = {
      getHello: jest.fn().mockReturnValue('test-response'),
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: mockAppService,
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('test-response');
      expect(mockAppService.getHello).toHaveBeenCalled();
    });
  });
});

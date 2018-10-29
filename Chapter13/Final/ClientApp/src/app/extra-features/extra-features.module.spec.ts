import { ExtraFeaturesModule } from './extra-features.module';

describe('ExtraFeaturesModule', () => {
  let extraFeaturesModule: ExtraFeaturesModule;

  beforeEach(() => {
    extraFeaturesModule = new ExtraFeaturesModule();
  });

  it('should create an instance', () => {
    expect(extraFeaturesModule).toBeTruthy();
  });
});

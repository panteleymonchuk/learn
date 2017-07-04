import { AngularCodeguideGiphyPage } from './app.po';

describe('angular-codeguide-giphy App', function() {
  let page: AngularCodeguideGiphyPage;

  beforeEach(() => {
    page = new AngularCodeguideGiphyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

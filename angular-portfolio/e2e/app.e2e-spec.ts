import { AngularPortfolioPage } from './app.po';

describe('angular-portfolio App', () => {
  let page: AngularPortfolioPage;

  beforeEach(() => {
    page = new AngularPortfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

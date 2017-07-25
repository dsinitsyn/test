import { Ng3mPage } from './app.po';

describe('ng3m App', () => {
  let page: Ng3mPage;

  beforeEach(() => {
    page = new Ng3mPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { Awesome24Page } from './app.po';

describe('awesome24 App', function() {
  let page: Awesome24Page;

  beforeEach(() => {
    page = new Awesome24Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

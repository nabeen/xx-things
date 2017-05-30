import { XxThingsPage } from './app.po';

describe('xx-things App', () => {
  let page: XxThingsPage;

  beforeEach(() => {
    page = new XxThingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

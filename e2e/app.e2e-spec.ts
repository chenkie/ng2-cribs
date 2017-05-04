import { Cribs.TestPage } from './app.po';

describe('cribs.test App', () => {
  let page: Cribs.TestPage;

  beforeEach(() => {
    page = new Cribs.TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

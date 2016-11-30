import { Ng2CribsPage } from './app.po';

describe('ng2-cribs App', function() {
  let page: Ng2CribsPage;

  beforeEach(() => {
    page = new Ng2CribsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

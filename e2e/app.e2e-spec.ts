import { ModalAppPage } from './app.po';

describe('modal-app App', function() {
  let page: ModalAppPage;

  beforeEach(() => {
    page = new ModalAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

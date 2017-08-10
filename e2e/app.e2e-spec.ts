import { HavasPage } from './app.po';

describe('havas App', () => {
  let page: HavasPage;

  beforeEach(() => {
    page = new HavasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

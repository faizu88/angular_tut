import { NgRootPage } from './app.po';

describe('ng-root App', () => {
  let page: NgRootPage;

  beforeEach(() => {
    page = new NgRootPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

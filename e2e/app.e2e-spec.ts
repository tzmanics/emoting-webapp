import { EmotingWebappPage } from './app.po';

describe('emoting-webapp App', function() {
  let page: EmotingWebappPage;

  beforeEach(() => {
    page = new EmotingWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recip',
    });

    expect(notification).toBeTruthy();
  });

  //   it('should not be able to create a notification content with less than 5 characters', () => {
  //     expect(() => new Content('Voa')).toThrow();
  //   });
});

import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';

export class PrismaNotificationMapper {
  // Com metodos estaticos não é preciso instanciar a classe
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  // Converter do prisma para a camada de dominio da aplicação
  static toDomain(raw: RawNotification): Notification {
    // Por mais que se esteja dando um new Notification, nao esta criando uma nova notification
    // quer dizer que estamos criando uma referencia de uma notificação
    return new Notification(
      // Dados passados para o constructor
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        canceledAt: raw.canceledAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}

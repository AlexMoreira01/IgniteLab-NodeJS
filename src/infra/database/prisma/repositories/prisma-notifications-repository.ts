import { PrismaNotificationMapper } from './../mappers/prisma-notification-mapper';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  // Inversão de dependencia
  constructor(private prisma: PrismaService) {}

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = await this.prisma.notification.findUnique({
      where: {
        id: notificationId,
      },
    });

    if (!notification) {
      return null;
    }

    // Notification que o prisma retorna não é o mesmo que nos temos na nossa aplicação em entities
    // Entidades podem parecer a mesma coisa entre camadas, mas nao são
    // Notification na camada de banco de dados nao e a mesma na camada de aplicação caso de uso -- utilizar mappers para converter
    return PrismaNotificationMapper.toDomain(notification);
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = await this.prisma.notification.findMany({
      where: {
        recipientId,
      },
    });

    // Essas sao as notificações da camada de persistencia e não da apicação
    return notifications.map((notifications) => {
      return PrismaNotificationMapper.toDomain(notifications);
    });

    // Ou se usar => return notifications.map(PrismaNotificationMapper.toDomain);
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = await this.prisma.notification.count({
      where: {
        recipientId,
      },
    });

    return count;
  }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prisma.notification.create({
      data: raw,
    });
  }

  async save(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prisma.notification.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
}

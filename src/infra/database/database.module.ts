import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';
import { PrismaService } from './prisma/prisma.service';
import { Module } from '@nestjs/common';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      // Sempre que chamarem a inteface ou contrato do repository se devolve o repository
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  // Quais providers devem ser compartilhados com quem importar esse modulo, no caso o http module
  exports: [NotificationsRepository],
})
export class DataBaseModule {}

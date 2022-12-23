import { SendNotification } from '@application/use-cases/send-notification';
import { NotificationsController } from './controllers/notifications.controller';
import { DataBaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';

@Module({
  //  O que importar os serviços do banco como os repository esta no Modulo de database e se importa ele aqui e também no app.module
  imports: [DataBaseModule],
  controllers: [NotificationsController],
  // Para se utilizar o send notification deve se usar o provider pois se nao a injeção de dependencia nao funciona para os que estajam fora dele
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}

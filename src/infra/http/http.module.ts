import { SendNotification } from '@application/use-cases/send-notification';
import { NotificationsController } from './controllers/notifications.controller';
import { DataBaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';

@Module({
  //  O que importar os serviços do banco como os repository esta no Modulo de database e se importa ele aqui e também no app.module
  imports: [DataBaseModule],
  controllers: [NotificationsController],
  // Para se utilizar o send notification deve se usar o provider pois se nao a injeção de dependencia nao funciona para os que estajam fora dele
  providers: [SendNotification],
})
export class HttpModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EpisodesModule } from './episodes/episodes.module';
import { TopicsModule } from './topics/topics.module';
import { ApiKeyGuard } from './guards/guards.module';
import { IsPositivePipe } from './pipes/is-positive-pipe.module';

@Module({
  imports: [EpisodesModule, TopicsModule, ApiKeyGuard, IsPositivePipe],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

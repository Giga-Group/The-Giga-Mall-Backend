import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeaturedService } from './featured.service';
import { FeaturedController } from './featured.controller';
import { FeaturedItem } from '../../entities/featured-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FeaturedItem])],
  controllers: [FeaturedController],
  providers: [FeaturedService],
  exports: [FeaturedService],
})
export class FeaturedModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadedSvg } from '../../entities/uploaded-svg.entity';
import { MallMapService } from './mall-map.service';
import { MallMapController } from './mall-map.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UploadedSvg])],
  controllers: [MallMapController],
  providers: [MallMapService],
})
export class MallMapModule {}

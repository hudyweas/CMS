import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseConnectorService } from './shared-services/database-connector.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [DatabaseConnectorService],
})
export class ServicesModule {}

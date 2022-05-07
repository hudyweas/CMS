import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseConnectorService } from './shared-services/database-connector.service';
import { FirebaseAuthService } from './shared-services/firebase-auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [DatabaseConnectorService, FirebaseAuthService],
})
export class ServicesModule {}

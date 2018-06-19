import { NgModule } from '@angular/core';

import { JhiAnsibleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhiAnsibleSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    providers: [],
    exports: [JhiAnsibleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhiAnsibleSharedCommonModule {}

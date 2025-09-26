import { NgModule } from "@angular/core"
import { Card } from "./card"


@NgModule({
declarations:[Card], 
exports:[Card] // to make it available outside this module i.e for other modules to import this module.
})

export class SharedModule { }
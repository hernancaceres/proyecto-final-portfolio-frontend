
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, EventEmitter, HostBinding, Input, OnInit, Output,} from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';


@Component({
    selector: 'app-public',
    templateUrl: './public.component.html',
    styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

    title = "Material-Switcher";

    @HostBinding("class") componetCssClass: any;
  
    constructor(public overlayContainer: OverlayContainer) { }
  
    public onSetTheme(e : string){
      this.overlayContainer.getContainerElement().classList.add(e);
      this.componetCssClass = e;
    }

    ngOnInit(): void { }

    @Input()
    isDarkMode = false;
  
    @Output()
    readonly darkModeSwitched = new EventEmitter<boolean>();
  
    onDarkModeSwitched({ checked }: MatSlideToggleChange) {
      this.darkModeSwitched.emit(checked);
    }
}
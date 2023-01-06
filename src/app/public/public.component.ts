import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, EventEmitter, HostBinding, Input, OnInit, Output, } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { TokenService } from './service/token.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  isLogged = false;

  //comienza material
  title = "Material-Switcher";
  @HostBinding("class") componetCssClass: any;
  //termina material

  constructor(
    public overlayContainer: OverlayContainer,
    private router: Router,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login'])
  }

  //comienza material
  public onSetTheme(e: string) {
    this.overlayContainer.getContainerElement().classList.add(e);
    this.componetCssClass = e;

    // Actualiza la variable isDarkMode cuando se cambia el tema
    if (e === "dark-theme") {
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
  }

  @Input()
  isDarkMode = false;

  @Output()
  readonly darkModeSwitched = new EventEmitter<boolean>();

  onDarkModeSwitched({ checked }: MatSlideToggleChange) {
    this.isDarkMode = checked;
    this.darkModeSwitched.emit(checked);
  }
  //termina material
}

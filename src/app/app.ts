import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ToastContainerComponent } from './shared/components/toast/toast.component';
import { FloatingCartBarComponent } from './shared/components/floating-cart-bar/floating-cart-bar.component';
import { FulfillmentService } from './core/services/fulfillment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    ToastContainerComponent,
    FloatingCartBarComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private router = inject(Router);
  private fulfillmentService = inject(FulfillmentService);

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkUrlForTableContext();
      });

    this.checkUrlForTableContext();
  }

  private checkUrlForTableContext(): void {
    const urlTree = this.router.parseUrl(this.router.url);
    const tableParam = urlTree.queryParams['table'];

    if (tableParam) {
      this.fulfillmentService.processUrlContext(tableParam);
    }
  }
}

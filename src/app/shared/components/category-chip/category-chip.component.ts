import { Component, input, output } from '@angular/core';
import { ProductCategory } from '../../../core/models/product.model';

@Component({
  selector: 'app-category-chip',
  standalone: true,
  template: `
    <button 
      type="button" 
      class="cat-chip" 
      [class.active]="isActive()"
      (click)="selected.emit(category())">
      @if (category().icon) {
        <i [class]="category().icon + ' chip-icon'"></i>
      }
      <span class="chip-name">{{ category().nameAr }}</span>
      <span class="chip-count">{{ category().itemCount }}</span>
    </button>
  `,
  styles: [`
    .cat-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.55rem 1.15rem;
      border-radius: 999px;
      background: #ffffff;
      border: 1.5px solid #e2e8f0;
      color: #334155;
      font-weight: 700;
      font-size: 0.88rem;
      transition: all 0.2s ease;
      cursor: pointer;
      white-space: nowrap;
      user-select: none;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
    }
    .cat-chip:hover {
      border-color: #059669;
      color: #047857;
      background: #f0fdf4;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(4, 120, 87, 0.08);
    }
    .cat-chip:active {
      transform: scale(0.96);
    }
    .cat-chip.active {
      background: #064e3b;
      color: #ffffff;
      border-color: #064e3b;
      box-shadow: 0 4px 14px rgba(6, 78, 59, 0.25);
    }
    .cat-chip.active .chip-icon {
      color: #86efac;
    }
    .cat-chip.active .chip-count {
      background: rgba(255, 255, 255, 0.25);
      color: #ffffff;
    }
    .chip-icon {
      font-size: 0.88rem;
      color: #059669;
      transition: color 0.2s;
    }
    .chip-count {
      background: #f1f5f9;
      color: #64748b;
      font-size: 0.72rem;
      padding: 0.1rem 0.5rem;
      border-radius: 999px;
      font-weight: 800;
    }

    @media (max-width: 768px) {
      .cat-chip {
        padding: 0.45rem 0.95rem;
        font-size: 0.82rem;
        gap: 0.4rem;
      }
      .chip-icon {
        font-size: 0.8rem;
      }
      .chip-count {
        font-size: 0.7rem;
        padding: 0.08rem 0.4rem;
      }
    }
  `]
})
export class CategoryChipComponent {
  readonly category = input.required<ProductCategory>();
  readonly isActive = input<boolean>(false);
  readonly selected = output<ProductCategory>();
}

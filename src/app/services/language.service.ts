import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'es' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly languageSubject = new BehaviorSubject<Language>('es');
  readonly language$ = this.languageSubject.asObservable();

  get language(): Language {
    return this.languageSubject.value;
  }

  toggle(): void {
    this.languageSubject.next(this.language === 'es' ? 'en' : 'es');
  }
}

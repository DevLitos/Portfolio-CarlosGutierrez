import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {

  /** Replays the last emission so late subscribers still receive the signal. */
  private _revealed = new ReplaySubject<void>(1);
  readonly reveal$ = this._revealed.asObservable();

  /** Tracks whether the hero intro animation has already played (first visit). */
  private _hasAnimated = false;
  get hasAnimated(): boolean { return this._hasAnimated; }

  private _isRevealed = false;
  get isRevealed(): boolean { return this._isRevealed; }

  /** Called by LoaderComponent once the countdown finishes. */
  emitReveal(): void {
    this._isRevealed = true;
    this._revealed.next();
    this._revealed.complete();
  }

  /** Called by InicioComponent after the full hero sequence runs. */
  markAnimated(): void {
    this._hasAnimated = true;
  }
}

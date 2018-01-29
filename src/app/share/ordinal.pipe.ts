import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({ name: 'ordinal' })
export class OrdinalPipe implements PipeTransform {
  public transform(value: number): string {
    switch (value) {
      case 1:
        return value + 'st';
      case 2:
        return value + 'nd';
      case 3:
        return value + 'rd';
      default:
        return value + 'th';

    }
  }
}
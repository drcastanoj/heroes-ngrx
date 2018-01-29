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
@Pipe({ name: 'meters' })
export class MetersPipe implements PipeTransform {
  public transform(value: number): string {
    const meters: number = value * 0.3048 ;
    return meters.toFixed(2);
  }
}

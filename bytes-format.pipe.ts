import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytesFormat'
})
export class BitesFormatPipe implements PipeTransform {
  static bytesToSize(bytes: number) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

    if (bytes === 0) {
      return 'n/a';
    } else {
      const type = Math.floor(Math.log(bytes) / Math.log(1024));

      if (type === 0) {
        return `${bytes} ${sizes[type]})`;
      } else {
        return `${(bytes / (1024 ** type)).toFixed(1)} ${sizes[type]}`;
      }
    }
  }

  transform(value: number): string {
    return SizeFormatPipe.bytesToSize(value);
  }
}

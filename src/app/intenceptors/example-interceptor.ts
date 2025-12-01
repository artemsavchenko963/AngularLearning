import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs';

export const exampleInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req);
  req = req.clone({
    setHeaders: {
      Authorization: "some-tokens"
    }
  })
  return next(req).pipe(catchError((error) => {
    alert('Not found ${error.status}')
    return []
  }));
};

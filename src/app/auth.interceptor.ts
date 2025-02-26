import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQwNjY2NDk5LCJpYXQiOjE3NDA1ODAwOTksImp0aSI6IjFlYTQ2MTc2OWQ2MzQwODg5MzBiMWI3ZTg3M2FjNWI4IiwidXNlcl9pZCI6MX0.R5d9IW6wf_rVtpxYKjTJAkCGweqFpESieu3yB5UnpYA';
  const updateRequest = req.clone({
    setHeaders: { Authorization: `Bearer ${token}` },
  });

  return next(updateRequest);
};

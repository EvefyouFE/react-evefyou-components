export enum FallbackTypeEnum {
  errorResult = 'errorResult',
  loading = 'loading'
}

export interface BasicFallbackProps {
  fallbackType?: FallbackTypeEnum;
}
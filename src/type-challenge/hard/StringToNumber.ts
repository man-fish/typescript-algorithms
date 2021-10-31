type StringToNumber<T extends string> = StringToTunple<T>['length'];

type StringToTunple<T extends string> = T extends `${infer H}${infer R}`
    ? H extends ''
        ? []
        : [H, ...StringToTunple<R>]
    : [];

type n = StringToNumber<'123456'>;

declare const maybe: unknown;


// const aNumber: number = maybe; -> error

if (maybe === true ) {
  const aBoolean: boolean = maybe;
}


if (typeof maybe === 'string') {
  const aString: string = maybe
}
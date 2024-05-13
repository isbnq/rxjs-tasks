export const subLog = {
  next: console.log,
  error: console.error,
  onErrOrComplete: (cb: () => void) => ({
    next: console.log,
    error: (err: any) => {
      cb();
      return console.error(err);
    },
    complete: cb
  })
}

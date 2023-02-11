export function setCookie(cName: string, cValue: string, expiresTime: number) {
  const date = new Date();
  date.setTime(expiresTime);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${cName}=${cValue};${expires};path=/`;
}

export function getCookie(cName: string) {
  const name = `${cName}=`;
  const ca = document.cookie.split(';');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
